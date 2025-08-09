'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function EcommerceFeaturesImplementationPage() {
  const moduleContent = {
    title: "E-commerce Features Implementation",
    subtitle: "Building complete e-commerce functionality. Product CRUD operations, shopping cart, checkout system, order management, admin panel, and full e-commerce features.",
    sections: [
      {
        id: "module-overview",
        title: "E-commerce Features Overview",
        content: [
          {
            type: "text",
            content: "In this module, we'll implement all the core e-commerce features that make a complete online shopping platform. From product management to checkout and order processing, we'll build every component needed for a fully functional e-commerce website."
          },
          {
            type: "list",
            title: "Core E-commerce Features",
            items: [
              "Product catalog and management system",
              "Shopping cart and checkout functionality",
              "Order processing and management",
              "User account and profile management",
              "Admin panel for product management",
            ]
          },
          {
            type: "text",
            content: "This module will transform our Django project into a complete, production-ready e-commerce platform with all the features users expect from modern online shopping experiences."
          }
        ]
      },
      {
        id: "product-management",
        title: "Product Management System",
        content: [
          {
            type: "text",
            content: "The product management system is the backbone of any e-commerce platform. We'll create a comprehensive system for managing products, categories, inventory, and product information."
          },
          {
            type: "list",
            title: "Product Management Features",
            items: [
              "Product creation, editing, and deletion",
              "Product categorization and organization",
              "Product images and media management",
              "Inventory tracking and stock management"
            ]
          },
          {
            type: "text",
            content: "We'll implement both admin-side product management and frontend product display with all necessary CRUD operations."
          },
          {
            type: "list",
            title: "Product CRUD Operations",
            items: [
              "Create: Add new products with all details",
              "Read: Display products with filtering and search",
              "Update: Edit product information and inventory",
              "Delete: Remove products with proper cleanup",
              "List: Paginated product listings"
            ]
          }
        ]
      },
      {
        id: "product-catalog",
        title: "Product Catalog & Display",
        content: [
          {
            type: "text",
            content: "The product catalog is what customers see when they visit your e-commerce site. We'll create an engaging, user-friendly product display system that showcases products effectively."
          },
          {
            type: "list",
            title: "Product Catalog Features",
            items: [
              "Product grid and list views",
              "Product detail pages with full information",
              "Product images and galleries",
              "Product specifications and details",
              "Product pricing and discount display",
              "Add to cart functionality",
            ]
          },
          {
            type: "text",
            content: "The product catalog will be responsive, fast-loading, and optimized for both desktop and mobile devices."
          },
          {
            type: "list",
            title: "Catalog Display Components",
            items: [
              "Home page featured products",
              "Category-based product listings",
              "Search results display",
              "Product image zoom and gallery",
            ]
          }
        ]
      },
      {
        id: "shopping-cart",
        title: "Shopping Cart System",
        content: [
          {
            type: "text",
            content: "The shopping cart is where customers collect items they want to purchase. We'll build a robust cart system that handles product selection, quantity management, and price calculations."
          },
          {
            type: "list",
            title: "Shopping Cart Features",
            items: [
              "Add products to cart functionality",
              "Cart item quantity management",
              "Remove items from cart",
              "Cart total and subtotal calculations",
            ]
          }
        ]
      },
      {
        id: "admin-panel",
        title: "Admin Panel & Management",
        content: [
          {
            type: "text",
            content: "The admin panel is where store administrators manage all aspects of the e-commerce platform. We'll create a comprehensive admin interface for product, order, and user management."
          },
          {
            type: "list",
            title: "Admin Panel Features",
            items: [
              "Product management and CRUD operations",
              "Order management and processing",
              "User management and customer support"
            ]
          },
          {
            type: "text",
            content: "The admin panel will be intuitive, powerful, and provide all the tools needed to run a successful e-commerce business."
          },
          {
            type: "list",
            title: "Admin Dashboard",
            items: [
              "Recent orders and status updates"
            ]
          }
        ]
      },
      {
        id: "user-accounts",
        title: "User Accounts & Profiles",
        content: [
          {
            type: "text",
            content: "User accounts allow customers to manage their information."
          },
          {
            type: "list",
            title: "User Account Features",
            items: [
              "User registration and profile creation",
              "Account settings and preferences",
            ]
          },
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
    </div>
  );
}
