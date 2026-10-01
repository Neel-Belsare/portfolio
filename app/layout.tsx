import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://neelbelsare.vercel.app'),
  title: 'Neel Belsare | Full-Stack Engineer & AI Systems',
  description: 'Portfolio of Neel Belsare — Full-Stack Engineer and AI Systems builder specializing in high-performance web platforms, Next.js, React, Node.js, and Agentic AI.',
  keywords: [
    'Neel Belsare',
    'Full Stack Engineer',
    'AI Engineer',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'AI Systems',
  ],
  authors: [{ name: 'Neel Belsare' }],
  openGraph: {
    title: 'Neel Belsare | Full-Stack Engineer & AI Systems',
    description: 'Building modern web experiences, scalable applications, and AI-powered digital products.',
    url: 'https://neelbelsare.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-[#0a0a0c] text-white antialiased selection:bg-[#FF6B35] selection:text-black">
        {children}
      </body>
    </html>
  );
}
