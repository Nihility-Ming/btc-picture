#!/bin/bash

echo ""
echo "把btc-pictures项目推送到GitHub服务器"
echo ""

read -p "请输入更新注释: " inputText

dir_path="/c/Users/Administrator/Desktop/hexo/source/btc-pictures"
website_path="/c/Users/Administrator/Desktop/Nihility-Ming.github.io"

cd $dir_path
node build.js
git pull
git add .
git commit -m "$inputText"
git push origin

cp -R ../js/const.js $website_path/js
cd $website_path
git pull
git add ./js/const.js
git commit -m "$inputText"
git push origin

echo ""
echo ""
echo "成功把项目推送到GitHub服务器！"
echo ""
read -p "按任意键继续..."
