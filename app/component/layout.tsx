import { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between">
          <div className="text-white text-lg">
            <Link href="/">Home</Link>
          </div>
          <div className="space-x-4">
            <Link href="/mark8" className="text-white">Mark8</Link>
            <Link href="/stores" className="text-white">Stores</Link>
            <Link href="/cart" className="text-white">My Cart</Link>
            <Link href="/saved" className="text-white">Saved</Link>
            <Link href="/open-store" className="text-white">Open a Store</Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
