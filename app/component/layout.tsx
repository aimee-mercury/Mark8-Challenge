import { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Home Link */}
          <div className="text-white text-lg">
            <Link href="/">Home</Link>
          </div>
          
          {/* Navigation Links (Hidden on small screens, flex on larger) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/mark8" className="text-white">Mark8</Link>
            <Link href="/stores" className="text-white">Stores</Link>
            <Link href="/cart" className="text-white">My Cart</Link>
            <Link href="/saved" className="text-white">Saved</Link>
            <Link href="/open-store" className="text-white">Open a Store</Link>
          </div>

          {/* Mobile Menu (Visible on small screens, hidden on larger) */}
          <div className="md:hidden">
            <button className="text-white">Menu</button>
           
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
