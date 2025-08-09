'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faGraduationCap, faBook, faPlay, faShoppingCart, faClock, faCertificate, faUsers, faCode, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Master Django web development from scratch. Build real-world applications, 
            learn best practices, and become a Django expert with our comprehensive course.
          </p>

          {/* Course Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4">
              <div className="text-yellow-400 text-2xl mb-2">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3 className="text-lg font-bold text-white">14 Hours</h3>
              <p className="text-gray-400 text-sm">Comprehensive Course</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4">
              <div className="text-yellow-400 text-2xl mb-2">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="text-lg font-bold text-white">Doubt Sessions</h3>
              <p className="text-gray-400 text-sm">Full Support</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4">
              <div className="text-yellow-400 text-2xl mb-2">
                <FontAwesomeIcon icon={faCertificate} />
              </div>
              <h3 className="text-lg font-bold text-white">Certificate</h3>
              <p className="text-gray-400 text-sm">From ClickSkills</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4">
              <div className="text-yellow-400 text-2xl mb-2">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 className="text-lg font-bold text-white">E-commerce Project</h3>
              <p className="text-gray-400 text-sm">Fully Functional</p>
            </div>
          </div>

          {/* Registration Deadline Alert */}
          <div className="mb-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500 text-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faClock} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Limited Time Registration</h3>
                  <p className="text-red-300">Course registration closes on <span className="font-bold text-yellow-400">August 22nd, 2025</span></p>
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm">
                  Don&apos;t miss out on this comprehensive Django course! 
                  <br className="hidden md:block" />
                  Secure your spot before registration closes.
                </p>
              </div>
            </div>
          </div>

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
                <span>Purchase Course for Non-Students</span>
              </Link>
              <Link
                href="https://rzp.io/rzp/xcNsGzd"
                target="_blank"
                className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Purchase Course for Students</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Course Outcomes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              By the end of this comprehensive 14-hour Django course, you&apos;ll have mastered web development 
              and built a fully functional e-commerce website ready for production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Complete Django Mastery</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Master Django MVT architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Build real-world applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Database design and ORM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Forms, validation, and CRUD operations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">E-commerce Project</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Fully functional e-commerce website</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>User authentication and profiles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Shopping cart and checkout system</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Payment integration with Razorpay</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/40 transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">
                <FontAwesomeIcon icon={faCertificate} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Professional Certification</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>ClickSkills certificate upon completion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Industry-recognized credential</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Portfolio-ready project</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-sm" />
                  <span>Production deployment experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                What You&apos;ll Get
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Footer */}
      <footer className="bg-black/80 border-t border-yellow-400/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 ClickSkills. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
