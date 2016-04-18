#!/bin/sh
set -euv -o pipefail
curl "$CLICKBUS_API_URL/places" | jq . > ./fixtures/places1.json
