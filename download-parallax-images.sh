#!/bin/bash

# パララックス背景画像をダウンロードするスクリプト
mkdir -p public/images

# サービスセクション用の背景画像
curl -o public/images/parallax-bg-services.jpg https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop

echo "パララックス背景画像のダウンロードが完了しました。"
