import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://neelbelsare.vercel.app'),
  title: 'Neel Belsare | AI & Data Science · Business Analytics · Systems Architecture',
  description: 'Portfolio of Neel Belsare — AI & Data Science undergraduate (Minor in Business Analytics) at MGM JNEC. Specializing in Prescriptive Analytics, Operations Research, BI Pipelines, and Full-Stack Systems.',
  keywords: [
    'Neel Belsare',
    'AI & Data Science',
    'Business Analytics',
    'Operations Research',
    'Data Product Manager',
    'Business Intelligence',
    'Prescriptive Analytics',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'AI Systems',
  ],
  authors: [{ name: 'Neel Belsare' }],
  openGraph: {
    title: 'Neel Belsare | AI & Data Science · Business Analytics · Systems Architecture',
    description: 'Translating AI metrics to business ROI with prescriptive analytics, spatial optimization, and scalable web platforms.',
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
