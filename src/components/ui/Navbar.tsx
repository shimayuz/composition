'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-800">
            <Image 
              src="/images/logo.png" 
              alt="Composition" 
              width={180} 
              height={30}
              className="object-contain"
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-[#3a5a40]">
            ホーム
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-[#3a5a40]">
            私たちについて
          </Link>
          <Link href="#services" className="text-gray-600 hover:text-[#3a5a40]">
            サービス
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-[#3a5a40]">
            プロジェクト
          </Link>
          <Link href="#news" className="text-gray-600 hover:text-[#3a5a40]">
            ニュース
          </Link>
          <Link href="/contact" className="btn-primary">
            お問い合わせ
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            className="outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link 
              href="#about" 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              私たちについて
            </Link>
            <Link 
              href="#services" 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link 
              href="#projects" 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              プロジェクト
            </Link>
            <Link 
              href="#news" 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              ニュース
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};