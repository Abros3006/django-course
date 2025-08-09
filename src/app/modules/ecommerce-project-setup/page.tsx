'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function EcommerceProjectSetupPage() {
  const moduleContent = {
    title: "E-commerce Project Setup",
    subtitle: "Building an e-commerce website. Project setup, home page, login, register pages, OAuth integration, database design, and user authentication system.",
    sections: [
      {
        id: "project-overview",
        title: "E-commerce Project Overview",
        content: [
          {
            type: "text",
            content: "In this module, we'll build a complete e-commerce website from scratch. This project will demonstrate all the Django concepts we've learned so far and introduce new features like OAuth authentication, user management, and e-commerce functionality."
          },
          {
            type: "list",
            title: "Project Features",
            items: [
              "User authentication and registration system",
              "OAuth integration (Google, Facebook, GitHub)",
              "Product catalog and search functionality",
              "Shopping cart and checkout system",
              "Order management and tracking",
              "User profiles and preferences",
              "Admin panel for product management",
              "Payment integration (Stripe, PayPal)",
              "Email notifications and confirmations",
              "Responsive design for mobile and desktop"
            ]
          },
          {
            type: "text",
            content: "This e-commerce project will be a comprehensive application that showcases real-world Django development practices and modern web application features."
          },
          {
            type: "list",
            title: "Project Goals",
            items: [
              "Apply all Django concepts learned in previous modules",
              "Build a production-ready e-commerce application",
              "Implement modern authentication and security practices",
              "Create a scalable and maintainable codebase",
              "Learn real-world development workflows and best practices"
            ]
          }
        ]
      },
      {
        id: "project-setup",
        title: "Project Setup & Configuration",
        content: [
          {
            type: "text",
            content: "Setting up a new Django project for e-commerce requires careful planning and proper configuration. We'll create a well-structured project that can scale as the application grows."
          },
          {
            type: "list",
            title: "Project Structure",
            items: [
              "Main project directory with settings and configuration",
              "Separate apps for different functionalities",
              "Static files and media handling",
              "Environment variables and configuration management",
              "Database setup and initial migrations",
              "Development and production settings separation"
            ]
          },
          {
            type: "text",
            content: "A well-organized project structure is crucial for maintainability and scalability. We'll follow Django best practices and create a structure that makes sense for an e-commerce application."
          },
          {
            type: "list",
            title: "Initial Setup Steps",
            items: [
              "Create virtual environment and install dependencies",
              "Initialize Django project with proper settings",
              "Set up version control (Git) and .gitignore",
              "Configure database (PostgreSQL for production)",
              "Set up static files and media handling",
              "Configure environment variables",
              "Create initial project structure"
            ]
          },
          {
            type: "text",
            content: "We'll use modern development practices including environment variables, proper dependency management, and version control from the start."
          }
        ]
      },
      {
        id: "database-design",
        title: "Database Design & Models",
        content: [
          {
            type: "text",
            content: "A well-designed database is the foundation of any e-commerce application. We'll design a comprehensive database schema that handles users, products, orders, and all related data."
          },
          {
            type: "list",
            title: "Core Database Models",
            items: [
              "User: Extended user model with profile information",
              "Product: Product catalog with categories, images, and pricing",
              "Category: Product categorization and organization",
              "Order: Customer orders and order history",
              "OrderItem: Individual items within orders",
              "Cart: Shopping cart functionality",
              "Address: User addresses for shipping and billing",
              "Review: Product reviews and ratings",
              "Wishlist: User wishlists and favorites"
            ]
          },
          {
            type: "text",
            content: "Each model will have proper relationships, constraints, and methods to ensure data integrity and provide useful functionality."
          },
          {
            type: "list",
            title: "Database Relationships",
            items: [
              "User → Orders: One-to-many relationship",
              "User → Addresses: One-to-many relationship",
              "User → Reviews: One-to-many relationship",
              "Product → Category: Many-to-one relationship",
              "Product → Reviews: One-to-many relationship",
              "Order → OrderItems: One-to-many relationship",
              "User → Wishlist: Many-to-many relationship",
              "Product → Cart: Many-to-many relationship"
            ]
          },
          {
            type: "text",
            content: "The database design will support all e-commerce functionality while maintaining data integrity and performance."
          }
        ]
      },
      {
        id: "user-authentication",
        title: "User Authentication System",
        content: [
          {
            type: "text",
            content: "User authentication is a critical component of any e-commerce application. We'll implement a comprehensive authentication system that includes traditional email/password registration and modern OAuth integration."
          },
          {
            type: "list",
            title: "Authentication Features",
            items: [
              "Email and password registration",
              "Email verification and account activation",
              "Password reset and recovery",
              "OAuth integration (Google, Facebook, GitHub)",
              "User profile management",
              "Session management and security",
              "Two-factor authentication (optional)",
              "Account deactivation and deletion"
            ]
          },
          {
            type: "text",
            content: "We'll use Django's built-in authentication system as a foundation and extend it with custom functionality and OAuth integration."
          },
          {
            type: "list",
            title: "OAuth Integration",
            items: [
              "Google OAuth: Most popular and widely used",
              "Facebook OAuth: Social media integration",
              "GitHub OAuth: Developer-friendly option",
              "Secure token handling and storage",
              "User data synchronization",
              "Account linking and merging"
            ]
          },
          {
            type: "text",
            content: "OAuth integration will provide users with convenient login options while maintaining security and data privacy."
          }
        ]
      },
      {
        id: "home-page",
        title: "Home Page Design & Implementation",
        content: [
          {
            type: "text",
            content: "The home page is the first impression users have of your e-commerce site. We'll create an engaging, user-friendly home page that showcases products and encourages user interaction."
          },
          {
            type: "list",
            title: "Home Page Components",
            items: [
              "Hero section with featured products or promotions",
              "Product categories and navigation",
              "Featured products showcase",
              "Latest products and new arrivals",
              "Special offers and discounts",
              "Customer testimonials and reviews",
              "Newsletter signup",
              "Footer with links and information"
            ]
          },
          {
            type: "text",
            content: "The home page will be responsive, fast-loading, and optimized for both desktop and mobile devices."
          },
          {
            type: "list",
            title: "Home Page Features",
            items: [
              "Dynamic content loading",
              "Product search and filtering",
              "Quick view product functionality",
              "Add to cart from home page",
              "User-friendly navigation",
              "Mobile-responsive design",
              "Fast loading and optimization",
              "SEO-friendly structure"
            ]
          },
          {
            type: "text",
            content: "We'll implement modern design patterns and ensure the home page provides an excellent user experience."
          }
        ]
      },
      {
        id: "login-page",
        title: "Login Page & Authentication Flow",
        content: [
          {
            type: "text",
            content: "The login page is where users access their accounts. We'll create a secure, user-friendly login system that supports both traditional and OAuth authentication methods."
          },
          {
            type: "list",
            title: "Login Page Features",
            items: [
              "Clean and intuitive login form",
              "Email/password authentication",
              "OAuth login buttons (Google, Facebook, GitHub)",
              "Remember me functionality",
              "Password reset link",
              "Registration link for new users",
              "Error handling and validation",
              "Security features (CSRF, rate limiting)"
            ]
          },
          {
            type: "text",
            content: "The login page will be secure, accessible, and provide a smooth user experience."
          },
          {
            type: "list",
            title: "Authentication Flow",
            items: [
              "User enters credentials or chooses OAuth",
              "System validates credentials or OAuth tokens",
              "User account is verified and activated",
              "Session is created and user is logged in",
              "User is redirected to intended page or dashboard",
              "Failed login attempts are handled gracefully",
              "Security measures prevent brute force attacks"
            ]
          },
          {
            type: "text",
            content: "We'll implement proper security measures including rate limiting, account lockout, and secure session management."
          }
        ]
      },
      {
        id: "register-page",
        title: "Registration Page & User Onboarding",
        content: [
          {
            type: "text",
            content: "The registration page is where new users create accounts. We'll design a comprehensive registration system that collects necessary information while maintaining a smooth user experience."
          },
          {
            type: "list",
            title: "Registration Page Features",
            items: [
              "User-friendly registration form",
              "Email verification process",
              "Password strength requirements",
              "Terms of service and privacy policy",
              "OAuth registration options",
              "Profile information collection",
              "Email preferences and newsletter signup",
              "Account activation and welcome process"
            ]
          },
          {
            type: "text",
            content: "The registration process will be streamlined while ensuring we collect all necessary information for a complete user profile."
          },
          {
            type: "list",
            title: "User Onboarding Process",
            items: [
              "Account creation and email verification",
              "Welcome email and getting started guide",
              "Profile completion and preferences setup",
              "First-time user experience and tutorials",
              "Account activation and login",
              "Personalized recommendations",
              "Customer support and help resources"
            ]
          },
          {
            type: "text",
            content: "A good onboarding process increases user engagement and reduces abandonment rates."
          }
        ]
      },
      {
        id: "oauth-integration",
        title: "OAuth Integration & Social Login",
        content: [
          {
            type: "text",
            content: "OAuth integration allows users to sign in using their existing social media accounts. This provides convenience for users and can increase registration rates."
          },
          {
            type: "list",
            title: "OAuth Providers",
            items: [
              "Google OAuth: Most popular, reliable, and secure",
              "Facebook OAuth: Large user base, social features",
              "GitHub OAuth: Developer-friendly, tech audience",
              "Twitter OAuth: Social media integration",
              "LinkedIn OAuth: Professional networking"
            ]
          },
          {
            type: "text",
            content: "We'll implement OAuth integration using Django packages and follow security best practices."
          },
          {
            type: "list",
            title: "OAuth Implementation Steps",
            items: [
              "Register applications with OAuth providers",
              "Configure OAuth settings and credentials",
              "Install and configure Django OAuth packages",
              "Create OAuth login views and URLs",
              "Handle OAuth callbacks and user data",
              "Link OAuth accounts to existing users",
              "Implement account merging and linking",
              "Handle OAuth errors and edge cases"
            ]
          },
          {
            type: "list",
            title: "OAuth Security Considerations",
            items: [
              "Secure token storage and handling",
              "User data privacy and protection",
              "Account linking and merging security",
              "OAuth provider security requirements",
              "Regular security audits and updates"
            ]
          },
          {
            type: "text",
            content: "OAuth integration will provide users with convenient login options while maintaining security and data privacy."
          }
        ]
      },
      {
        id: "user-profiles",
        title: "User Profiles & Account Management",
        content: [
          {
            type: "text",
            content: "User profiles allow users to manage their personal information, preferences, and account settings. We'll create a comprehensive user profile system."
          },
          {
            type: "list",
            title: "User Profile Features",
            items: [
              "Personal information management",
              "Address book and shipping addresses",
              "Order history and tracking",
              "Wishlist and favorites",
              "Account preferences and settings",
              "Email preferences and notifications",
              "Security settings and password management",
              "Account deactivation and deletion"
            ]
          },
          {
            type: "text",
            content: "User profiles will be comprehensive and provide users with full control over their account and preferences."
          },
          {
            type: "list",
            title: "Profile Management",
            items: [
              "Profile editing and updates",
              "Avatar and profile picture upload",
              "Privacy settings and data sharing",
              "Communication preferences",
              "Account linking and OAuth management",
              "Data export and account portability"
            ]
          },
          {
            type: "text",
            content: "We'll implement proper data privacy controls and give users full control over their personal information."
          }
        ]
      },
      {
        id: "security-implementation",
        title: "Security Implementation & Best Practices",
        content: [
          {
            type: "text",
            content: "Security is crucial for any e-commerce application. We'll implement comprehensive security measures to protect user data and ensure secure transactions."
          },
          {
            type: "list",
            title: "Security Features",
            items: [
              "CSRF protection for all forms",
              "XSS prevention and input sanitization",
              "SQL injection protection",
              "Secure session management",
              "Password hashing and salting",
              "Rate limiting and brute force protection",
              "Account lockout and security measures",
              "Data encryption and secure storage"
            ]
          },
          {
            type: "text",
            content: "We'll follow security best practices and implement multiple layers of protection."
          },
          {
            type: "list",
            title: "Security Best Practices",
            items: [
              "Regular security audits and updates",
              "Secure coding practices and guidelines",
              "Input validation and sanitization",
              "Error handling and logging",
              "Secure communication (HTTPS)",
              "Data backup and recovery procedures"
            ]
          },
          {
            type: "text",
            content: "Security will be a top priority throughout the development process."
          }
        ]
      },
      {
        id: "deployment-preparation",
        title: "Deployment Preparation & Production Setup",
        content: [
          {
            type: "text",
            content: "Preparing for deployment involves configuring the application for production environments, setting up servers, and ensuring the application is ready for real users."
          },
          {
            type: "list",
            title: "Deployment Considerations",
            items: [
              "Production server setup and configuration",
              "Database configuration and optimization",
              "Static files and media handling",
              "Environment variables and secrets management",
              "SSL certificates and HTTPS setup",
              "Domain configuration and DNS setup",
              "Monitoring and logging setup",
              "Backup and recovery procedures"
            ]
          },
          {
            type: "text",
            content: "We'll prepare the application for production deployment while maintaining security and performance."
          },
          {
            type: "list",
            title: "Production Features",
            items: [
              "Performance optimization and caching",
              "Database optimization and indexing",
              "CDN integration for static files",
              "Load balancing and scalability",
              "Monitoring and alerting systems",
              "Automated backups and recovery"
            ]
          },
          {
            type: "text",
            content: "The application will be production-ready with proper monitoring, security, and performance optimization."
          }
        ]
      }
    ]
  };

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
              {/* <Link href="/s" className="text-white hover:text-yellow-400 transition-colors duration-300">Syllabus</Link>
              <Link href="/notes" clsyllabuassName="text-white hover:text-yellow-400 transition-colors duration-300">Notes</Link> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-black via-gray-900 to-yellow-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              href="/modules" 
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to Modules</span>
            </Link>
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {moduleContent.title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl">
              {moduleContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {moduleContent.sections.map((section, index) => (
              <div key={section.id} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold">
                    {index + 1}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.type === "text" && (
                        <p className="text-gray-300 leading-relaxed">{item.content}</p>
                      )}
                      
                      {item.type === "list" && (
                        <div>
                          <h3 className="text-yellow-400 font-semibold mb-3">{item.title}</h3>
                          <ul className="space-y-2">
                            {item.items?.map((listItem, listIndex) => (
                              <li key={listIndex} className="flex items-start space-x-3 text-gray-300">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{listItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
