'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faGraduationCap, faBook, faPlay, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={150}
                height={100}
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-yellow-400">Home</Link>
              <Link href="/modules" className="text-white hover:text-yellow-400 transition-colors duration-300">Modules</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-yellow-400/20 opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">
                Django
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Master Django web development from scratch. Build real-world applications, 
            learn best practices, and become a Django expert with our comprehensive course.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/modules" className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <FontAwesomeIcon icon={faPlay} className="group-hover:animate-pulse" />
              <span>Start Learning</span>
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://rzp.io/rzp/n2ZsFV0t"
                target="_blank"
                className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Buy Course for Others</span>
              </Link>
              <Link
                href="https://rzp.io/rzp/xcNsGzd"
                target="_blank"
                className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Buy Course for Students</span>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Learning</h3>
              <p className="text-gray-400">From basics to advanced Django concepts with hands-on projects</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4">
                <FontAwesomeIcon icon={faBook} />
              </div>
              <h3 className="text-xl font-bold mb-2">Detailed Notes</h3>
              <p className="text-gray-400">Complete syllabus and comprehensive notes for every topic</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3 className="text-xl font-bold mb-2">Real Projects</h3>
              <p className="text-gray-400">Build real-world applications and deploy them to production</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
