import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Logo and Description */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Dreamy Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-xl font-light">True Shine Home Service</span>
            </div>
            <p className="mt-4 text-sm font-light leading-relaxed max-w-xs">
              Dedicated to providing the best home services, live a life of comfort and cleanliness.
            </p>
          </div>
          
          {/* Right Side - Navigation Links */}
          <div className="flex justify-end items-start">
            <nav className="flex space-x-8">
              <Link href="#about" className="text-sm uppercase tracking-wider hover:text-white transition duration-300">
                About
              </Link>
              <Link href="#services" className="text-sm uppercase tracking-wider hover:text-white transition duration-300">
                Services
              </Link>
              <Link href="#testimonials" className="text-sm uppercase tracking-wider hover:text-white transition duration-300">
                Testimonials
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex justify-end">
          <p className="text-xs text-gray-400">
            © 2025 True Shine Home Services All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}