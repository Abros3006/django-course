'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function RoutingViewsTemplatesPage() {
  const moduleContent = {
    title: "Routing, Views & Templates",
    subtitle: "Routing, path params, function views, HTML responses. Tags, filters, inheritance, static files. Deep dive into HTTP, networking, and web fundamentals.",
    sections: [
      {
        id: "http-fundamentals",
        title: "HTTP Fundamentals & Networking",
        content: [
          {
            type: "text",
            content: "Before diving into Django routing and views, it's essential to understand how the web actually works. Let's explore HTTP, networking, and the request-response cycle."
          },
          {
            type: "list",
            title: "What is HTTP?",
            items: [
              "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web",
              "It's a stateless protocol that follows a client-server model",
              "HTTP defines how messages are formatted and transmitted",
              "It's the protocol used by web browsers to request web pages from servers"
            ]
          },
          {
            type: "text",
            content: "HTTP works on a request-response model. When you visit a website, your browser (client) sends an HTTP request to the server, and the server responds with the requested data."
          },
          {
            type: "list",
            title: "HTTP Methods",
            items: [
              "GET: Retrieve data from the server (e.g., loading a webpage)",
              "POST: Submit data to the server (e.g., submitting a form)",
              "PUT: Update existing data on the server",
              "DELETE: Remove data from the server",
              "PATCH: Partially update data on the server"
            ]
          },
          {
            type: "text",
            content: "HTTP is stateless, meaning each request is independent. The server doesn't remember previous requests from the same client. This is why we use cookies, sessions, and tokens to maintain state."
          }
        ]
      },
      {
        id: "tcp-networking",
        title: "TCP, IP Addresses & Network Fundamentals",
        content: [
          {
            type: "text",
            content: "When you type 'google.com' in your browser, a complex series of events occurs to bring that website to your screen. Let's understand this process step by step."
          },
          {
            type: "list",
            title: "What is TCP?",
            items: [
              "TCP (Transmission Control Protocol) ensures reliable data transmission between client and server",
              "It establishes a connection before sending data",
              "TCP breaks data into packets and ensures all packets arrive correctly",
              "It's like a reliable postal service for the internet"
            ]
          },
          {
            type: "list",
            title: "What Happens When You Visit google.com?",
            items: [
              "1. DNS Resolution: Browser looks up google.com's IP address",
              "2. TCP Connection: Establishes connection to the server",
              "3. HTTP Request: Sends request for the webpage",
              "4. Server Processing: Server processes the request",
              "5. HTTP Response: Server sends back the webpage",
              "6. Browser Rendering: Browser displays the webpage"
            ]
          },
          {
            type: "text",
            content: "DNS (Domain Name System) is like the internet's phone book. It translates human-readable domain names like 'google.com' into IP addresses that computers can understand, like '142.250.190.78'."
          },
          {
            type: "list",
            title: "IP Addresses Explained",
            items: [
              "IPv4: 32-bit addresses (e.g., 192.168.1.1) - Most common",
              "IPv6: 128-bit addresses (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334) - Newer standard",
              "Public IP: Accessible from the internet (like your home's street address)",
              "Private IP: Only accessible within a local network (like your room number)"
            ]
          },
          {
            type: "text",
            content: "Think of IP addresses as the 'phone numbers' of the internet. Just like you need a phone number to call someone, your computer needs an IP address to communicate with other computers on the internet."
          }
        ]
      },
      {
        id: "dns-routing",
        title: "DNS Resolution & Web Routing",
        content: [
          {
            type: "text",
            content: "DNS resolution is the process of converting domain names to IP addresses. This happens every time you visit a website."
          },
          {
            type: "list",
            title: "DNS Resolution Process",
            items: [
              "1. Browser checks local cache for the domain name",
              "2. If not found, asks the operating system",
              "3. OS checks its own cache and DNS settings",
              "4. If not found, queries the configured DNS server",
              "5. DNS server may query other DNS servers",
              "6. Eventually returns the IP address to the browser"
            ]
          },
          {
            type: "text",
            content: "DNS servers are organized in a hierarchical structure. Root servers know about top-level domains (.com, .org, .net), which then know about specific domain names."
          },
          {
            type: "list",
            title: "Types of DNS Records",
            items: [
              "A Record: Maps domain name to IPv4 address",
              "AAAA Record: Maps domain name to IPv6 address",
              "CNAME Record: Creates alias for another domain name",
              "MX Record: Specifies mail server for the domain",
              "NS Record: Specifies name servers for the domain"
            ]
          },
          {
            type: "text",
            content: "DNS caching is crucial for performance. Once a domain name is resolved to an IP address, this information is cached at multiple levels to avoid repeated lookups."
          }
        ]
      },
      {
        id: "apis-explained",
        title: "What are APIs & How They Work",
        content: [
          {
            type: "text",
            content: "API stands for Application Programming Interface. It's a set of rules and protocols that allows different software applications to communicate with each other."
          },
          {
            type: "list",
            title: "What is an API?",
            items: [
              "A contract between two software applications",
              "Defines how applications can request and exchange data",
              "Acts as a waiter between the kitchen (server) and customer (client)",
              "Provides a standardized way to access functionality"
            ]
          },
          {
            type: "list",
            title: "Types of APIs",
            items: [
              "Web APIs: Communicate over HTTP/HTTPS (most common)",
              "REST APIs: Follow REST principles for web services",
              "GraphQL APIs: Query language for APIs",
              "SOAP APIs: XML-based protocol for web services",
              "Internal APIs: Used within a single application"
            ]
          },
          {
            type: "text",
            content: "Think of an API like a restaurant menu. The menu (API documentation) tells you what you can order (available endpoints), how to order it (request format), and what you'll get back (response format)."
          },
          {
            type: "list",
            title: "How APIs Work",
            items: [
              "1. Client sends a request to the API endpoint",
              "2. API processes the request according to its rules",
              "3. API interacts with the database or other services",
              "4. API formats the response and sends it back",
              "5. Client receives and processes the response"
            ]
          },
          {
            type: "text",
            content: "APIs are everywhere in modern web development. When you use social media, online banking, or even check the weather on your phone, you're interacting with APIs."
          }
        ]
      },
      {
        id: "django-routing",
        title: "Django URL Routing & Path Parameters",
        content: [
          {
            type: "text",
            content: "Django's URL routing system is like a traffic controller for your web application. It takes incoming web requests and directs them to the appropriate view function."
          },
          {
            type: "list",
            title: "What is URL Routing?",
            items: [
              "The process of matching URLs to view functions",
              "Defines the structure of your website's URLs",
              "Handles different types of requests (GET, POST, etc.)",
              "Manages path parameters and query strings"
            ]
          },
          {
            type: "text",
            content: "When someone visits your website, Django looks at the URL and matches it against your defined URL patterns. The first match determines which view function will handle the request."
          },
          {
            type: "list",
            title: "URL Pattern Components",
            items: [
              "Path: The actual URL path (e.g., '/blog/', '/about/')",
              "View: The function that handles the request",
              "Name: A unique identifier for the URL pattern",
              "Parameters: Dynamic parts of the URL (e.g., post ID, username)"
            ]
          },
          {
            type: "text",
            content: "Path parameters allow you to create dynamic URLs. For example, '/blog/123/' could show blog post number 123, and '/user/john/' could show John's profile page."
          },
          {
            type: "list",
            title: "Common Path Parameter Types",
            items: [
              "Integer parameters: For IDs, page numbers, etc.",
              "String parameters: For usernames, titles, etc.",
              "Slug parameters: For URL-friendly strings",
              "UUID parameters: For unique identifiers",
              "Path parameters: For full file paths"
            ]
          }
        ]
      },
      {
        id: "function-views",
        title: "Function Views & HTTP Responses",
        content: [
          {
            type: "text",
            content: "Function views are the simplest way to handle HTTP requests in Django. They take a request object and return an HTTP response."
          },
          {
            type: "list",
            title: "What is a Function View?",
            items: [
              "A Python function that takes a request and returns a response",
              "The most straightforward way to handle web requests",
              "Can handle different HTTP methods (GET, POST, etc.)",
              "Can return different types of responses (HTML, JSON, etc.)"
            ]
          },
          {
            type: "text",
            content: "When Django receives a request, it calls the appropriate view function. The view function processes the request, interacts with the database if needed, and returns a response to the user."
          },
          {
            type: "list",
            title: "Common Response Types",
            items: [
              "HTML Response: Rendered web pages",
              "JSON Response: Data for APIs and JavaScript",
              "Redirect Response: Sends user to another page",
              "File Response: Downloads or displays files",
              "Error Response: 404, 500, etc. error pages"
            ]
          },
          {
            type: "text",
            content: "Function views can access request data like form submissions, URL parameters, and user information. They can also interact with models to fetch or save data to the database."
          },
          {
            type: "list",
            title: "View Function Responsibilities",
            items: [
              "Validate incoming data",
              "Process business logic",
              "Interact with models and database",
              "Prepare data for templates",
              "Return appropriate HTTP responses"
            ]
          }
        ]
      },
      {
        id: "django-templates",
        title: "Django Templates & Template Language",
        content: [
          {
            type: "text",
            content: "Django templates are HTML files with special syntax that allows you to dynamically generate content. They're the 'T' in Django's MVT architecture."
          },
          {
            type: "list",
            title: "What are Templates?",
            items: [
              "HTML files with embedded Python-like syntax",
              "Separate presentation logic from business logic",
              "Allow dynamic content generation",
              "Support template inheritance and reusability"
            ]
          },
          {
            type: "text",
            content: "Templates use a special syntax with double curly braces {{ }} for variables and {% %} for template tags and logic. This makes it easy to mix static HTML with dynamic content."
          },
          {
            type: "list",
            title: "Template Features",
            items: [
              "Variable substitution: Display dynamic data",
              "Template tags: Control flow and logic",
              "Filters: Format and manipulate data",
              "Template inheritance: Reuse common layouts",
              "Template includes: Reuse template fragments"
            ]
          },
          {
            type: "text",
            content: "Templates help maintain a clean separation between your Python code (business logic) and your HTML (presentation). This makes your code more maintainable and easier to understand."
          }
        ]
      },
      {
        id: "template-tags-filters",
        title: "Template Tags & Filters",
        content: [
          {
            type: "text",
            content: "Template tags and filters are powerful tools for manipulating data and controlling template logic in Django templates."
          },
          {
            type: "list",
            title: "Template Tags",
            items: [
              "Control flow: if, for, while loops",
              "Template logic: include, extends, block",
              "URL generation: url tag",
              "CSRF protection: csrf_token",
              "Custom tags: User-defined functionality"
            ]
          },
          {
            type: "text",
            content: "Template tags use the {% %} syntax and can control the flow of your templates, include other templates, and generate URLs dynamically."
          },
          {
            type: "list",
            title: "Common Template Filters",
            items: [
              "String filters: title, lower, upper, truncatewords",
              "Date filters: date, time, timesince",
              "Number filters: floatformat, pluralize",
              "List filters: length, first, last",
              "Default filters: default, default_if_none"
            ]
          },
          {
            type: "text",
            content: "Filters are applied using the pipe symbol (|) and can be chained together. They help format and manipulate data for display without changing the original data."
          },
          {
            type: "text",
            content: "For example, {{ user.name|title }} would display 'John Doe' as 'John Doe', and {{ post.content|truncatewords:30 }} would show only the first 30 words of the post content."
          }
        ]
      },
      {
        id: "template-inheritance",
        title: "Template Inheritance",
        content: [
          {
            type: "text",
            content: "Template inheritance allows you to create a base template that other templates can extend. This promotes code reuse and maintains consistency across your site."
          },
          {
            type: "list",
            title: "Benefits of Template Inheritance",
            items: [
              "Code reuse: Common elements defined once",
              "Consistency: Uniform look across pages",
              "Maintainability: Changes in one place affect all pages",
              "Organization: Clear structure and hierarchy",
              "Flexibility: Child templates can override specific sections"
            ]
          },
          {
            type: "text",
            content: "Think of template inheritance like a family tree. The base template is like a parent that defines the overall structure, and child templates inherit this structure while adding their own unique content."
          },
          {
            type: "list",
            title: "Template Inheritance Components",
            items: [
              "Base template: Defines the overall structure",
              "Blocks: Placeholders that child templates can fill",
              "Child templates: Extend the base template",
              "Block content: Specific content for each page",
              "Nested inheritance: Templates can extend other templates"
            ]
          },
          {
            type: "text",
            content: "Common blocks in a base template include title, content, sidebar, footer, and scripts. Child templates can override any of these blocks to customize the page while maintaining the overall structure."
          }
        ]
      },
      {
        id: "static-files",
        title: "Static Files & Media Handling",
        content: [
          {
            type: "text",
            content: "Static files (CSS, JavaScript, images) and media files (user uploads) are essential for modern web applications. Django provides built-in support for handling these files."
          },
          {
            type: "list",
            title: "Static Files",
            items: [
              "CSS files: Styling and layout",
              "JavaScript files: Interactive functionality",
              "Images: Graphics, icons, and photos",
              "Fonts: Custom typography",
              "Other assets: PDFs, documents, etc."
            ]
          },
          {
            type: "text",
            content: "Static files are files that don't change based on user input or database content. They're the same for all users and are typically served directly by the web server in production."
          },
          {
            type: "list",
            title: "Media Files",
            items: [
              "User uploads: Profile pictures, documents",
              "Generated content: Reports, exports",
              "Temporary files: Processing and caching",
              "Backup files: System backups and archives"
            ]
          },
          {
            type: "text",
            content: "Media files are user-generated content that can change over time. They're typically stored separately from static files and may require special handling for security and performance."
          },
          {
            type: "list",
            title: "File Handling Best Practices",
            items: [
              "Use appropriate file types and sizes",
              "Implement security measures for uploads",
              "Optimize images and other assets",
              "Use CDNs for better performance",
              "Backup important files regularly"
            ]
          },
          {
            type: "text",
            content: "Django's static file handling includes automatic collection, compression, and serving. The {% static %} template tag helps generate correct URLs for static files, and Django can automatically collect all static files into a single directory for production."
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
              {/* <Link href="/s" csyllabulassName="text-white hover:text-yellow-400 transition-colors duration-300">Syllabus</Link>
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
