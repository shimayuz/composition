#!/bin/bash

# Gitリポジトリの初期化
git init

# 必要なダミー画像ディレクトリを作成（実際の実装では、ここに画像ファイルを配置する）
mkdir -p public/images/services
mkdir -p public/images/projects
mkdir -p public/images/news

# 初期コミット
git add .
git commit -m "Initial commit: Composition company website"

# GitHubリポジトリを作成後、以下のコマンドを使用
# リモートリポジトリのURLを設定（これは実際のURLに変更する必要があります）
# git remote add origin https://github.com/yourusername/composition-website.git

# リモートにプッシュ
# git push -u origin main