'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ModulesPage() {
  const modules = [
    {
      id: 1,
      title: "Introduction to Django",
      subtitle: "What is Django? Install, first project, venv, settings, manage.py, urls. Deep dive into Model-View-Template",
      duration: "2 hours",
      topics: [
        "Python Basics (30 mins)",
        "Django Introduction & Theory",
        "Installation & Virtual Environment",
        "First Django Project Setup",
        "Django Apps vs Projects",
        "Creating and Configuring Apps",
        "App File Structure & Components",
        "Deep Dive into MVT Architecture"
      ],
      status: "available",
      link: "/modules/introduction-to-django"
    },
    {
      id: 2,
      title: "Routing, Views & Templates",
      subtitle: "Routing, path params, function views, HTML responses. Tags, filters, inheritance, static files. Deep dive into HTTP, networking, and web fundamentals.",
      duration: "2 hours",
      topics: [
        "HTTP Fundamentals & Networking",
        "TCP, IP Addresses & Network Fundamentals",
        "DNS Resolution & Web Routing",
        "What are APIs & How They Work",
        "Django URL Routing & Path Parameters",
        "Function Views & HTTP Responses",
        "Django Templates & Template Language",
        "Template Tags & Filters",
        "Template Inheritance",
        "Static Files & Media Handling"
      ],
      status: "available",
      link: "/modules/routing-views-templates"
    },
    {
      id: 3,
      title: "Models, Migrations & Database",
      subtitle: "Models, migrations, DB setup, querying, relationships. Superuser, register models, customize admin. Deep dive into databases, ORM, SQL vs NoSQL.",
      duration: "2 hours",
      topics: [
        "Database Fundamentals",
        "SQL vs NoSQL Databases",
        "What is ORM & Why Use It?",
        "Django Models & Model Fields",
        "Model Relationships & Foreign Keys",
        "Database Migrations",
        "Database Querying & ORM Queries",
        "Django Admin Interface",
        "Creating Superuser & Admin Customization",
        "Database Optimization & Best Practices"
      ],
      status: "available",
      link: "/modules/models-migrations-database"
    },
    {
      id: 4,
      title: "Forms, CRUD & Validation",
      subtitle: "Forms, validation, CSRF. Full CRUD flow, forms, routes, redirects. Complete CRUD operations with Django forms and validation.",
      duration: "2 hours",
      topics: [
        "Django Forms Fundamentals",
        "Form Validation & Error Handling",
        "CSRF Protection & Security",
        "CRUD Operations Overview",
        "Create Operations",
        "Read Operations",
        "Update Operations",
        "Delete Operations",
        "Form Handling & Processing",
        "Redirects & Routing for CRUD",
        "Security Considerations for Forms"
      ],
      status: "available",
      link: "/modules/forms-crud-validation"
    },
    {
      id: 5,
      title: "E-commerce Project Setup",
      subtitle: "Building an e-commerce website. Project setup, home page, login, register pages, OAuth integration, database design, and user authentication system.",
      duration: "2 hours",
      topics: [
        "E-commerce Project Overview",
        "Project Setup & Configuration",
        "Database Design & Models",
        "User Authentication System",
        "Home Page Design & Implementation",
        "Login Page & Authentication Flow",
        "Registration Page & User Onboarding",
        "OAuth Integration & Social Login",
        "User Profiles & Account Management",
        "Security Implementation & Best Practices",
        "Deployment Preparation & Production Setup"
      ],
      status: "available",
      link: "/modules/ecommerce-project-setup"
    },
    {
      id: 6,
      title: "E-commerce Features Implementation",
      subtitle: "Building complete e-commerce functionality. Product CRUD operations, shopping cart, checkout system, order management, admin panel, and full e-commerce features.",
      duration: "2 hours",
      topics: [
        "E-commerce Features Overview",
        "Product Management System",
        "Product Catalog & Display",
        "Shopping Cart System",
        "Checkout & Payment System",
        "Order Management System",
        "Admin Panel & Management",
        "User Accounts & Profiles",
        "Search & Filtering System",
        "Reviews & Ratings System",
        "Inventory Management",
        "Email Notifications & Communication",
        "Performance Optimization & Scalability",
        "Testing & Deployment"
      ],
      status: "available",
      link: "/modules/ecommerce-features-implementation"
    },
    {
      id: 7,
      title: "Deployment & Payment Integration",
      subtitle: "Final module: Payment integration with Razorpay, GitHub setup, deployment on Render, and project completion. Ready for production deployment.",
      duration: "2 hours",
      topics: [
        "Final Module Overview",
        "Razorpay Payment Integration",
        "GitHub Repository Setup",
        "Production Environment Preparation",
        "Deployment on Render",
        "Testing & Validation",
        "Project Completion & Course Wrap-up"
      ],
      status: "available",
      link: "/modules/deployment-payment-integration"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faBook} className="text-yellow-400 text-2xl" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Django Course
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</Link>
              <Link href="/modules" className="text-yellow-400">Modules</Link>
              {/* <Link href="/syllabus" className="text-white hover:text-yellow-400 transition-colors duration-300">Syllabus</Link>
              <Link href="/notes" className="text-white hover:text-yellow-400 transition-colors duration-300">Notes</Link> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-black via-gray-900 to-yellow-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Course Modules
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Master Django web development through our comprehensive, hands-on modules designed for beginners to advanced developers.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <div key={module.id} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Module {module.id}
                  </div>
                  <div className="text-yellow-400 text-sm font-semibold">
                    {module.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {module.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {module.subtitle}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-yellow-400 font-semibold mb-3">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {module.topics.map((topic, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={module.link}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 w-full justify-center"
                >
                  <FontAwesomeIcon icon={faPlay} />
                  <span>Start Module</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
