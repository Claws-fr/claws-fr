#!/bin/bash
# Claws.fr blog cron — génère, push, déploie via API Vercel, notifie Telegram
set -e
cd /Users/leoc/Projects/claws-fr

LOG=/tmp/claws-blog-cron.log
echo "" >> "$LOG"
echo "[claws cron] $(date)" | tee -a "$LOG"

# ── Clés ─────────────────────────────────────────────────────────────────
ANTHROPIC_API_KEY=$(python3 -c "
import json
with open('/Users/leoc/.openclaw/openclaw.json') as f:
    c = json.load(f)
print(c.get('env', {}).get('ANTHROPIC_API_KEY', '').strip())
")
export ANTHROPIC_API_KEY

VERCEL_TOKEN=$(python3 -c "
import json
with open('/Users/leoc/.openclaw/openclaw.json') as f:
    c = json.load(f)
key = c.get('env', {}).get('VERCEL_TOKEN', '')
print(key.replace('\n', '').strip())
")
export VERCEL_TOKEN

TG_TOKEN=$(python3 -c "
import json
with open('/Users/leoc/.openclaw/openclaw.json') as f:
    c = json.load(f)
print(c.get('channels',{}).get('telegram',{}).get('accounts',{}).get('default',{}).get('botToken',''))
")
TG_CHAT_ID="5586671893"

# ── Git user ──────────────────────────────────────────────────────────────
git config user.name "Ahmad Chamseddine"
git config user.email "ahmad.chamsedine@gmail.com"

# ── Génération article ────────────────────────────────────────────────────
echo "📝 Génération article..." | tee -a "$LOG"
GEN_OUTPUT=$(node scripts/generate-article.mjs 2>&1) || {
  echo "❌ Génération échouée" | tee -a "$LOG"
  echo "$GEN_OUTPUT" >> "$LOG"
  exit 1
}
echo "$GEN_OUTPUT" | tee -a "$LOG"

SLUG=$(echo "$GEN_OUTPUT" | grep -o 'slug: [a-z0-9-]*\|Publié.*blog/[a-z0-9-]*' | grep -o '[a-z0-9-]*$' | tail -1)
if [ -z "$SLUG" ]; then
  echo "⚠️  Aucun article généré (tous les sujets publiés ?)." | tee -a "$LOG"
  exit 0
fi

echo "📤 Git push OK" | tee -a "$LOG"
COMMIT_HASH=$(git log --format=%h -1)

# ── Déploiement Vercel via API REST ───────────────────────────────────────
echo "🚀 Déploiement Vercel..." | tee -a "$LOG"
DEPLOY_RESPONSE=$(curl -s -X POST "https://api.vercel.com/v13/deployments" \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"claws-fr","gitSource":{"type":"github","repoId":"1163497815","ref":"main"}}')

DEPLOY_ID=$(echo "$DEPLOY_RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('id',''))" 2>/dev/null)
if [ -z "$DEPLOY_ID" ]; then
  echo "❌ Deploy Vercel échoué : $DEPLOY_RESPONSE" | tee -a "$LOG"
  exit 1
fi
echo "Deploy ID: $DEPLOY_ID" | tee -a "$LOG"

# Attendre READY (max 3 min)
for i in $(seq 1 18); do
  sleep 10
  STATUS=$(curl -s "https://api.vercel.com/v13/deployments/$DEPLOY_ID" \
    -H "Authorization: Bearer $VERCEL_TOKEN" | \
    python3 -c "import sys,json; print(json.load(sys.stdin).get('status',''))" 2>/dev/null)
  echo "Status: $STATUS" | tee -a "$LOG"
  if [ "$STATUS" = "READY" ]; then break; fi
  if [ "$STATUS" = "ERROR" ] || [ "$STATUS" = "CANCELED" ]; then
    echo "❌ Deploy $STATUS" | tee -a "$LOG"; exit 1
  fi
done

# Assigner alias production
curl -s -X POST "https://api.vercel.com/v10/deployments/$DEPLOY_ID/aliases" \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"alias":"claws.fr"}' >> "$LOG" 2>&1
echo "✅ Alias claws.fr assigné" | tee -a "$LOG"

# ── Vérification URL ──────────────────────────────────────────────────────
sleep 5
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://claws.fr/blog/$SLUG")
echo "HTTP check /blog/$SLUG : $HTTP_CODE" | tee -a "$LOG"

# ── Notification Telegram ─────────────────────────────────────────────────
TODAY=$(date +%Y-%m-%d)
URL="https://claws.fr/blog/${SLUG}"
NL=$'\n'
MSG="✅ Claws.fr — Article publié !${NL}${NL}"
MSG="${MSG}📌 Slug : ${SLUG}${NL}"
MSG="${MSG}📅 Date : ${TODAY}${NL}"
MSG="${MSG}🔗 ${URL}${NL}"
MSG="${MSG}📝 Commit : ${COMMIT_HASH} → Deploy READY"
[ "$HTTP_CODE" != "200" ] && MSG="${MSG}${NL}⚠️  HTTP $HTTP_CODE — vérifier manuellement"

python3 - <<PYEOF >> "$LOG" 2>&1
import urllib.request, json
token = "${TG_TOKEN}"
chat_id = "${TG_CHAT_ID}"
text = """${MSG}"""
data = json.dumps({"chat_id": chat_id, "text": text}).encode("utf-8")
req = urllib.request.Request(
    f"https://api.telegram.org/bot{token}/sendMessage",
    data=data,
    headers={"Content-Type": "application/json"}
)
urllib.request.urlopen(req)
print("✅ Telegram notif envoyée")
PYEOF

echo "[claws cron] DONE — $SLUG" | tee -a "$LOG"
