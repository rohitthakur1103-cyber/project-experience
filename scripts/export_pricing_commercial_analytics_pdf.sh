#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
INPUT_HTML="$ROOT_DIR/pricing-commercial-analytics-attachment.html"
OUTPUT_PDF="$ROOT_DIR/assets/documents/rohit-thakur-pricing-commercial-analytics.pdf"
INPUT_URI="file://${INPUT_HTML// /%20}"

"$CHROME_BIN" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --print-to-pdf="$OUTPUT_PDF" \
  "$INPUT_URI"

printf 'Generated %s\n' "$OUTPUT_PDF"
