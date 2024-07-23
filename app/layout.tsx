import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import Navigation from './component/Navigation'
export const metadata = {
  title: 'My Next.js App',
  description: 'A sample project with Next.js, TypeScript, and Tailwind CSS',
};

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>
      <div>
        {children}
      </div>
      
    </body>
  </html>
);

export default RootLayout;
