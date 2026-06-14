import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jaswanth Yalla | AI & Data Science Engineer',
  description:
    'Third-year B.Tech student in Artificial Intelligence and Data Science with hands-on experience in Python, Machine Learning, and backend development. Building real-time computer vision systems and predictive models.',
  keywords: ['Jaswanth Yalla', 'AI Engineer', 'Data Science', 'Machine Learning', 'Python Developer', 'React', 'Portfolio'],
  authors: [{ name: 'Jaswanth Yalla' }],
  openGraph: {
    title: 'Jaswanth Yalla | AI & Data Science Engineer',
    description: 'Third-year B.Tech student in AI & Data Science. Building real-time computer vision systems and predictive ML models.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaswanth Yalla | AI & Data Science Engineer',
    description: 'Third-year B.Tech student in AI & Data Science.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0A0A0A] text-white`}>
        {children}
      </body>
    </html>
  );
}
