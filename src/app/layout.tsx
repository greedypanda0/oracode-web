import '@/src/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oracode - Code That Shapes Minds',
  description: 'Empowering the next generation of coders through interactive learning, community support, and hands-on projects. Join thousands of young coders on their coding journey.',
  keywords: 'coding education, programming for kids, learn to code, coding tutorials, young coders, educational platform',
  authors: [{ name: 'Oracode Team' }],
  creator: 'Oracode',
  publisher: 'Oracode',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oracode.com',
    title: 'Oracode - Code That Shapes Minds',
    description: 'Empowering the next generation of coders through interactive learning and community support.',
    siteName: 'Oracode',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oracode - Code That Shapes Minds',
    description: 'Empowering the next generation of coders through interactive learning and community support.',
    creator: '@oracode',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}