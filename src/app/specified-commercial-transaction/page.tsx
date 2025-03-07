import { Section } from '../../components/layout/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export default function SpecifiedCommercialTransactionPage() {
  return (
    <Section id="specified-commercial-transaction" background="white">
      <SectionHeader title="特定商取引法に基づく表記" />
      
      <div className="prose max-w-3xl mx-auto mt-8">
          <table className="min-w-full border-collapse border border-gray-300 mb-8">
            <tbody>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100 w-1/3">販売事業者</th>
                <td className="py-3 px-4">合同会社コンポジション</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">代表者</th>
                <td className="py-3 px-4">代表社員　福島 裕介</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">所在地</th>
                <td className="py-3 px-4">〒155-0032 東京都世田谷区代沢5-19-12 2F</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">電話番号</th>
                <td className="py-3 px-4">090-1695-6422</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">メールアドレス</th>
                <td className="py-3 px-4">info@composition2940.com</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">URL</th>
                <td className="py-3 px-4">https://composition2940.com</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">インボイス制度適格請求書発行事業者登録番号</th>
                <td className="py-3 px-4">Ｔ４０２０００３０１６２５２</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">商品の販売価格</th>
                <td className="py-3 px-4">サイト上又はアプリ内の各オンライン有料サービス(以下本サービス)の購入ページに表示している金額です。</td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">商品以外の必要費用</th>
                <td className="py-3 px-4">
                  本サービスのアプリダウンロード、更新、ご利用等に係るデータ通信料はお客さまにご負担いただきます。
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">支払方法</th>
                <td className="py-3 px-4">
                  お支払い方法はサイト又はアプリ内に表示する方法となります。ご利用いただけるクレジットカードは、クレジットカード登録画面において指定するクレジットカードとなります。クレジットカードをご利用の場合、ご利用料金は、契約締結時にお客様がご利用のクレジットカード会社宛に請求いたします。なお、お客様のお支払いの時期は、お客様とクレジットカード会社との会員規約に基づきます。
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">商品(本サービス)の引き渡し時期</th>
                <td className="py-3 px-4">
                  支払方法の手続きが完了し次第、すぐにご利用いただけます。
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">返金について</th>
                <td className="py-3 px-4">
                  本サービス購入後の返金対応はいたしかねますので予めご了承ください。 販売する本サービスについて、当社の定める方法で返金可能とするかを選択するものとします。 返金可能とされたサービスについては、ユーザーが購入してから48時間以内に返金の意思表示をし、かつ当社が認めた場合には、ユーザーと当社の購入契約が解除されます。
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">本サービスの提供時期</th>
                <td className="py-3 px-4">
                  表示する方法によるお支払方法の手続きが完了し次第、すぐにご利用いただけます。
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-left bg-gray-100">本サービスの動作環境</th>
                <td className="py-3 px-4">
                  購入されたデジタルコンテンツを利用するために必要な動作環境は、以下の通りです：<br />
                  ・最新版のウェブブラウザ（例：Google Chrome, Mozilla Firefox, Safari, Brave）<br />
                  ・インターネット接続速度：最低5Mbps<br />
                  ・対応OS：Windows 10以上、macOS Mojave以上、iOS 12以上、Android 9以上
                </td>
              </tr>
            </tbody>
          </table>
          
          <p className="text-sm text-gray-600 mt-6">
            ※ 本表記の内容は、特定商取引法に基づく表記であり、実際の取引条件とは異なる場合があります。
            詳細な取引条件については、各商品・サービスページをご確認ください。
          </p>
      </div>
    </Section>
  );
}
