#!/usr/bin/env sh

# abort on errors
set -e

# build
echo 빌드합니다..
npm run build

# push
git add -A
echo -e "커밋 메시지를 입력하세요: c "
read word
git commit -m "$word"

# deploy
git push -u origin master