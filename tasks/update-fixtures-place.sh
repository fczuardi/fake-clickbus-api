#!/bin/sh
set -euv

curl -s -N "$CLICKBUS_API_URL/places" | jq . > ./fixtures/places.json
