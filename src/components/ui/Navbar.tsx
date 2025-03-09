'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { handleHashLinkClick } from '../../utils/smoothScroll';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-[#3a5a40] font-medium' : 'text-gray-600'} hover:text-[#3a5a40]`}
          >
            ホーム
          </Link>
          <Link 
            href={pathname === '/' ? '#about' : '/#about'} 
            className="text-gray-600 hover:text-[#3a5a40]"
            onClick={(e) => handleHashLinkClick(e, pathname, 80)}
          >
            私たちについて
          </Link>
          <Link 
            href={pathname === '/' ? '#services' : '/#services'} 
            className="text-gray-600 hover:text-[#3a5a40]"
            onClick={(e) => handleHashLinkClick(e, pathname, 80)}
          >
            サービス
          </Link>
          <Link 
            href={pathname === '/' ? '#projects' : '/#projects'} 
            className="text-gray-600 hover:text-[#3a5a40]"
            onClick={(e) => handleHashLinkClick(e, pathname, 80)}
          >
            プロジェクト
          </Link>
          <Link 
            href={pathname === '/' ? '#news' : '/#news'} 
            className="text-gray-600 hover:text-[#3a5a40]"
            onClick={(e) => handleHashLinkClick(e, pathname, 80)}
          >
            ニュース
          </Link>
          <Link 
            href="/contact" 
            className={`btn-primary ${pathname.startsWith('/contact') ? 'bg-[#3a5a40] text-white' : ''}`}
          >
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
              className={`${pathname === '/' ? 'text-[#3a5a40] font-medium' : 'text-gray-600'} hover:text-[#3a5a40] py-2 text-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link 
              href={pathname === '/' ? '#about' : '/#about'} 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={(e) => {
                handleHashLinkClick(e, pathname, 80);
                setIsMenuOpen(false);
              }}
            >
              私たちについて
            </Link>
            <Link 
              href={pathname === '/' ? '#services' : '/#services'} 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={(e) => {
                handleHashLinkClick(e, pathname, 80);
                setIsMenuOpen(false);
              }}
            >
              サービス
            </Link>
            <Link 
              href={pathname === '/' ? '#projects' : '/#projects'} 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={(e) => {
                handleHashLinkClick(e, pathname, 80);
                setIsMenuOpen(false);
              }}
            >
              プロジェクト
            </Link>
            <Link 
              href={pathname === '/' ? '#news' : '/#news'} 
              className="text-gray-600 hover:text-[#3a5a40] py-2 text-center"
              onClick={(e) => {
                handleHashLinkClick(e, pathname, 80);
                setIsMenuOpen(false);
              }}
            >
              ニュース
            </Link>
            <Link 
              href="/contact" 
              className={`btn-primary text-center ${pathname.startsWith('/contact') ? 'bg-[#3a5a40] text-white' : ''}`}
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