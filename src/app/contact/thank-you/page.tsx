import Link from 'next/link';
import { Section } from '../../../components/layout/Section';

export default function ThankYou() {
  return (
    <>
      <div className="bg-[var(--primary-color)] py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            お問い合わせありがとうございます
          </h1>
        </div>
      </div>
      
      <Section id="thank-you" background="light">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">お問い合わせを受け付けました</h2>
            
            <p className="text-gray-600 mb-6">
              お問い合わせいただき、ありがとうございます。<br />
              内容を確認次第、担当者より折り返しご連絡いたします。<br />
              通常、2営業日以内にご返信いたします。
            </p>
            
            <div className="mt-8">
              <Link href="/" className="btn-primary py-2 px-8">
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}