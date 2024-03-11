import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Omar Khatib | Senior Software Engineer | Next.js • React.js • Node.js • TypeScript • PostgreSQL',
  description:
    'I am a Senior Software Engineer with over 10 years of web development experience, My goal is to deliver high-quality, innovative solutions that solve real-world problems and enhance customer satisfaction. I have a strong background in React, Typescript, GraphQL, Next.js, and Node.js, and am always eager to learn new technologies and best practices.',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <link rel='icon' href='/favicon.ico' /> */}

      <body className={inter.className}>{children}</body>
    </html>
  );
}
