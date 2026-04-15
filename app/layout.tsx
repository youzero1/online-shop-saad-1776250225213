import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShopNext - Premium E-Commerce',
  description: 'Discover amazing products at unbeatable prices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
