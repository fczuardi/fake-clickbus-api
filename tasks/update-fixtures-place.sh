#!/bin/sh
set -euv

curl "$CLICKBUS_API_URL/places" | jq . > ./fixtures/places.json
