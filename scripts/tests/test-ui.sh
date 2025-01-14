#!/bin/bash

set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

npm run build

npm run app:start

npm run app:wait

cd tests/test-team

npm run test:local-ui