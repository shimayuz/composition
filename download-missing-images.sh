#!/bin/bash

# 不足している画像をダウンロードするスクリプト
mkdir -p public/images

# ロゴ画像
curl -o public/images/logo.png https://placehold.co/180x30/3a5a40/ffffff.png?text=Composition

# パララックス背景画像（サービスセクション用）
curl -o public/images/parallax-bg-services.jpg https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop

echo "不足していた画像のダウンロードが完了しました。"
