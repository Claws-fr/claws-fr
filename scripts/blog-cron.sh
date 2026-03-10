#!/bin/bash
set -e
ANTHROPIC_API_KEY=$(python3 -c "
import json
with open('/Users/leoc/.openclaw/openclaw.json') as f:
    c = json.load(f)
key = c.get('env', {}).get('ANTHROPIC_API_KEY', '')
print(key.replace('\n', '').strip())
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
cd /Users/leoc/Projects/claws-fr
node scripts/generate-article.mjs >> /tmp/claws-blog-cron.log 2>&1
