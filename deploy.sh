#!/usr/bin/env sh

# abort on errors
set -e

# build
echo 빌드합니다..
npm run build

cd docs
cp index.html 404.html
# find . -name ".DS_Store" -delete

# deploy
echo 배포합니다..
git add -A
echo -e "커밋 메시지를 입력하세요: "
read word
git commit -m "${word}"

# deploy
git push -u origin master

# 루트 디렉토리로 나와 dist 디렉토리 제거
cd -
rm -rf docs