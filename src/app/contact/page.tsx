"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Section } from '../../components/layout/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // 必須項目のバリデーション
      if (!formData.name || !formData.email || !formData.subject || !formData.message || !formData.privacy) {
        setError('必須項目をすべて入力してください');
        setIsSubmitting(false);
        return;
      }
      
      // APIエンドポイントにデータを送信
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'お問い合わせの送信に失敗しました');
      }
      
      // 送信成功時にサンクスページへリダイレクト
      router.push('/contact/thank-you');
    } catch (err) {
      console.error('送信エラー:', err);
      setError(err instanceof Error ? err.message : 'お問い合わせの送信に失敗しました');
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="bg-[var(--primary-color)] py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            お問い合わせ
          </h1>
        </div>
      </div>
      
      <Section id="contact-form" background="light">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            title="お気軽にご連絡ください" 
            subtitle="ご質問、お見積もり依頼、サービスに関するお問い合わせなど、お気軽にご連絡ください。担当者が迅速に対応いたします。"
            align="center"
          />
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                <p>{error}</p>
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  件名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={handleCheckboxChange}
                    className="focus:ring-[var(--primary-color)] h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-600">
                    <a href="/privacy-policy" className="text-[var(--primary-color)] hover:underline">プライバシーポリシー</a>に同意します <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="btn-primary py-3 px-10 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
      
      <Section id="contact-info" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--light-bg)] rounded-full mb-4">
                <svg className="w-8 h-8 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">所在地</h3>
              <p className="text-gray-600">
                〒155-0032<br />
                東京都世田谷区代沢5-19-12 2F<br />
                合同会社コンポジション
              </p>
            </div>
            
            {/* Email */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--light-bg)] rounded-full mb-4">
                <svg className="w-8 h-8 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">メール</h3>
              <p className="text-gray-600">
                <a href="mailto:info@composition2940.com" className="text-[var(--primary-color)] hover:underline">
                  info@composition2940.com
                </a>
              </p>
            </div>
            
            {/* Phone */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--light-bg)] rounded-full mb-4">
                <svg className="w-8 h-8 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">電話番号</h3>
              <p className="text-gray-600">
                <a href="tel:03-1234-5678" className="text-[var(--primary-color)] hover:underline">
                  090-1695-6422
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}