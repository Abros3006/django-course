'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function DeploymentPaymentIntegrationPage() {
  const moduleContent = {
    title: "Deployment & Payment Integration",
    subtitle: "Final module: Payment integration with Razorpay, GitHub setup, deployment on Render, and project completion. Ready for production deployment.",
    sections: [
      {
        id: "module-overview",
        title: "Final Module Overview",
        content: [
          {
            type: "text",
            content: "This is the final module of our Django course! We'll complete our e-commerce project by integrating payment processing with Razorpay, setting up version control with GitHub, and deploying the application to Render for production use."
          },
          {
            type: "list",
            title: "Module Objectives",
            items: [
              "Integrate Razorpay payment gateway",
              "Set up GitHub repository and version control",
              "Prepare project for production deployment",
              "Deploy application on Render platform",
              "Configure production environment",
              "Launch the final e-commerce website",
              "Complete the Django course successfully"
            ]
          }
        ]
      },
      {
        id: "payment-integration",
        title: "Razorpay Payment Integration",
        content: [
          {
            type: "text",
            content: "Payment integration is crucial for any e-commerce platform. We'll integrate Razorpay, a popular payment gateway in India, to handle secure online payments for our e-commerce website."
          },
          {
            type: "list",
            title: "Razorpay Integration Features",
            items: [
              "Secure payment processing",
              "Multiple payment methods (cards, UPI, net banking)",
              "Payment gateway integration",
              "Order confirmation and receipts",
              "Payment status tracking",
              "Payment analytics and reporting",
              "Webhook integration for real-time updates"
            ]
          },
          {
            type: "list",
            title: "Integration Steps",
            items: [
              "Razorpay account setup and API keys",
              "Install Razorpay Python SDK",
              "Configure payment settings in Django",
              "Create payment views and forms",
              "Implement payment processing logic",
              "Handle payment success and failure",
              "Set up webhook endpoints",
              "Test payment integration thoroughly"
            ]
          }
        ]
      },
      {
        id: "github-setup",
        title: "GitHub Repository Setup",
        content: [
          {
            type: "text",
            content: "Version control is essential for any software project. We'll set up a GitHub repository to manage our code, track changes, and collaborate with others."
          },
          {
            type: "list",
            title: "GitHub Setup Steps",
            items: [
              "Create GitHub account and repository",
              "Initialize Git repository locally",
              "Create .gitignore file for Django",
              "Add and commit project files",
              "Push code to GitHub repository",
              "Configure repository settings"
            ]
          },
          {
            type: "list",
            title: "Repository Structure",
            items: [
              "README.md with project documentation",
              "Requirements.txt for dependencies",
              "Environment variables template",
              "Deployment instructions",
              "Project structure and setup guide",
            ]
          }
        ]
      },
      {
        id: "production-preparation",
        title: "Production Environment Preparation",
        content: [
          {
            type: "text",
            content: "Preparing for production deployment requires careful planning and configuration. We'll set up the application for production use with proper security, performance, and reliability measures."
          },
          {
            type: "list",
            title: "Production Configuration",
            items: [
              "Environment variables and secrets management",
              "Database configuration for production",
              "Static files and media handling"
            ]
          },
          {
            type: "list",
            title: "Security Measures",
            items: [
              "CSRF protection and security headers",
              "Database security and access control",
              "User authentication and authorization"
            ]
          }
        ]
      },
      {
        id: "render-deployment",
        title: "Deployment on Render",
        content: [
          {
            type: "text",
            content: "Render is a modern cloud platform that makes it easy to deploy web applications. We'll deploy our Django e-commerce application on Render for production use."
          },
          {
            type: "list",
            title: "Render Platform Features",
            items: [
              "Easy deployment and scaling",
              "Automatic HTTPS and SSL certificates",
              "Database hosting and management",
              "Static file hosting and CDN",
              "Environment variable management",
              "Automatic deployments from GitHub",
              "Monitoring and logging",
            ]
          },
          {
            type: "list",
            title: "Deployment Steps",
            items: [
              "Create Render account and project",
              "Connect GitHub repository",
              "Configure build settings and commands",
              "Set up environment variables",
              "Configure database and services",
              "Deploy application to Render",
              "Configure custom domain and SSL",
              "Test deployed application"
            ]
          }
        ]
      },
      {
        id: "project-completion",
        title: "Project Completion & Course Wrap-up",
        content: [
          {
            type: "text",
            content: "Congratulations! You've successfully completed the Django course and built a fully functional e-commerce platform. Let's review what we've accomplished and plan for future development."
          },
          {
            type: "list",
            title: "Course Achievements",
            items: [
              "Mastered Django web development framework",
              "Built a complete e-commerce platform",
              "Implemented user authentication and OAuth",
              "Integrated payment processing with Razorpay",
              "Deployed application to production",
              "Learned real-world development practices",
              "Gained hands-on project experience",
              "Created a portfolio-worthy project"
            ]
          },
          {
            type: "list",
            title: "Project Features Completed",
            items: [
              "Complete e-commerce functionality",
              "User authentication and profiles",
              "Product management and catalog",
              "Shopping cart and checkout system",
              "Payment processing and integration",
              "Order management and tracking",
              "Admin panel and management",
              "Production deployment and monitoring"
            ]
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
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={150}
                height={100}
              />
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
