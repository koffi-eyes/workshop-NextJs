"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="text-center">
                <div className="relative w-[120px] h-[120px]">
                  <Image
                    src="/LUX.png"
                    alt="Matlux Logo"
                    width={120}
                    height={120}
                    className="group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <span className="block text-xs text-sage/80 font-light tracking-widest mt-1 group-hover:text-gold/80 transition-colors duration-300">
                  LE CONFORT ABSOLU, L'ÉLÉGANCE DU SOMMEIL
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/matelas" className="text-gray-700 hover:text-gold transition-colors duration-300">
              Matelas
            </Link>
            <Link href="/offres" className="text-gray-700 hover:text-gold transition-colors duration-300">
              Offres
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-gold transition-colors duration-300">
              À Propos
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/matelas" className="block px-3 py-2 text-gray-700 hover:text-gold">
              Matelas
            </Link>
            <Link href="/offres" className="block px-3 py-2 text-gray-700 hover:text-gold">
              Offres
            </Link>
            <Link href="/a-propos" className="block px-3 py-2 text-gray-700 hover:text-gold">
              À Propos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;