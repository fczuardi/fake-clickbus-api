#!/bin/sh
set -euv -o pipefail

TODAY=$(date +"%Y-%m-%d")

curl "$CLICKBUS_API_URL/trips" \
| jq . \
> ./fixtures/trips-error-j1.json

curl "$CLICKBUS_API_URL/trips" \
--get \
-d "from=sao-paulo-tiete-sp" \
-d "to=santos-sp" \
-d "departure=2015-01-01" \
| jq . \
> ./fixtures/trips-error-j9.json

curl "$CLICKBUS_API_URL/trips" \
--get \
-d "from=sao-paulo-tiete-sp" \
-d "to=santos-sp" \
-d "departure=$TODAY" \
| jq . \
> ./fixtures/trips.json
