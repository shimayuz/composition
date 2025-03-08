import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[var(--dark-bg)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Composition. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">
              プライバシーポリシー
            </Link>
            <Link href="/specified-commercial-transaction" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
