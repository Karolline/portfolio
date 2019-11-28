#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Building. this may take a minute...
npm run build

# push
git add -A
git commit -m "자동빌드 및 푸시"

# deploy
git push -u origin master