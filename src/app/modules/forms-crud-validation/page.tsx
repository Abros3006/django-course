'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function FormsCrudValidationPage() {
  const moduleContent = {
    title: "Forms, CRUD & Validation",
    subtitle: "Forms, validation, CSRF. Full CRUD flow, forms, routes, redirects. Complete CRUD operations with Django forms and validation.",
    sections: [
      {
        id: "forms-fundamentals",
        title: "Django Forms Fundamentals",
        content: [
          {
            type: "text",
            content: "Forms are the primary way users interact with web applications. They allow users to submit data, make selections, and interact with your application. Django provides a powerful form system that handles everything from rendering to validation."
          },
          {
            type: "list",
            title: "What are Django Forms?",
            items: [
              "Python classes that handle form rendering and validation",
              "Automatically generate HTML form elements",
              "Handle form data processing and cleaning",
              "Provide built-in validation and error handling",
              "Integrate seamlessly with Django models and views"
            ]
          },
          {
            type: "text",
            content: "Django forms abstract away the complexity of HTML forms, making it easier to create user-friendly interfaces while maintaining security and data integrity."
          },
          {
            type: "list",
            title: "Types of Django Forms",
            items: [
              "Form: Basic form class for general-purpose forms",
              "ModelForm: Form class that works with Django models",
              "FormSet: Handle multiple forms of the same type",
              "InlineFormSet: Handle related model forms",
              "Custom Forms: User-defined forms with custom logic"
            ]
          },
          {
            type: "text",
            content: "Forms in Django follow a similar pattern to models - they're defined as Python classes and can be customized extensively to meet your application's needs."
          }
        ]
      },
      {
        id: "form-validation",
        title: "Form Validation & Error Handling",
        content: [
          {
            type: "text",
            content: "Validation is crucial for ensuring data integrity and providing a good user experience. Django forms provide comprehensive validation capabilities that help you maintain clean, accurate data."
          },
          {
            type: "list",
            title: "What is Form Validation?",
            items: [
              "Process of checking if submitted data meets requirements",
              "Ensures data is in the correct format and range",
              "Prevents invalid or malicious data from being stored",
              "Provides user feedback for errors",
              "Maintains data integrity and application security"
            ]
          },
          {
            type: "text",
            content: "Django forms validate data at multiple levels: field-level validation, form-level validation, and model-level validation."
          },
          {
            type: "list",
            title: "Validation Levels",
            items: [
              "Field Validation: Individual field requirements (required, max_length, etc.)",
              "Form Validation: Cross-field validation and custom logic",
              "Model Validation: Database-level constraints and model methods",
              "Custom Validation: User-defined validation rules"
            ]
          },
          {
            type: "list",
            title: "Common Validation Types",
            items: [
              "Required Fields: Ensure important data is provided",
              "Data Types: Validate correct data types (email, URL, etc.)",
              "Length Validation: Check minimum and maximum lengths",
              "Range Validation: Ensure values are within acceptable ranges",
              "Format Validation: Validate specific formats (phone numbers, dates)",
              "Uniqueness: Ensure unique values where required"
            ]
          },
          {
            type: "text",
            content: "Django automatically handles most common validation scenarios, but you can also add custom validation logic for specific business requirements."
          }
        ]
      },
      {
        id: "csrf-protection",
        title: "CSRF Protection & Security",
        content: [
          {
            type: "text",
            content: "CSRF (Cross-Site Request Forgery) is a security vulnerability that allows malicious websites to perform actions on behalf of authenticated users. Django provides built-in CSRF protection to prevent these attacks."
          },
          {
            type: "list",
            title: "What is CSRF?",
            items: [
              "Cross-Site Request Forgery attack",
              "Malicious website tricks user's browser into making requests",
              "Attacker can perform actions on behalf of the user",
              "Can lead to unauthorized data changes or actions",
              "Common in web applications that use cookies for authentication"
            ]
          },
          {
            type: "text",
            content: "CSRF attacks work by exploiting the fact that browsers automatically send cookies (including authentication cookies) with requests to the same domain."
          },
          {
            type: "list",
            title: "How Django CSRF Protection Works",
            items: [
              "Generates unique CSRF tokens for each form",
              "Validates tokens on form submission",
              "Rejects requests without valid tokens",
              "Uses secure token generation and validation",
              "Integrates seamlessly with Django forms"
            ]
          },
          {
            type: "list",
            title: "CSRF Protection Features",
            items: [
              "Automatic token generation for forms",
              "Token validation on POST requests",
              "Secure token storage and transmission",
              "Configurable protection settings",
              "Integration with Django's security middleware"
            ]
          },
          {
            type: "text",
            content: "Django's CSRF protection is enabled by default and requires minimal configuration. It's one of the many security features that make Django a secure framework choice."
          }
        ]
      },
      {
        id: "crud-operations",
        title: "CRUD Operations Overview",
        content: [
          {
            type: "text",
            content: "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations that most web applications perform on data. Understanding CRUD is essential for building functional web applications."
          },
          {
            type: "list",
            title: "CRUD Operations",
            items: [
              "Create: Add new records to the database",
              "Read: Retrieve and display existing records",
              "Update: Modify existing records",
              "Delete: Remove records from the database"
            ]
          },
          {
            type: "text",
            content: "CRUD operations form the foundation of most web applications. Whether you're building a blog, e-commerce site, or social media platform, you'll need to implement these operations."
          },
          {
            type: "list",
            title: "CRUD in Web Applications",
            items: [
              "Blog: Create posts, read articles, update content, delete posts",
              "E-commerce: Create products, read catalog, update inventory, delete items",
              "Social Media: Create posts, read feeds, update profiles, delete content",
              "User Management: Create accounts, read profiles, update information, delete accounts"
            ]
          },
          {
            type: "text",
            content: "Django provides excellent support for CRUD operations through its models, forms, and views. The framework makes it easy to implement these operations securely and efficiently."
          }
        ]
      },
      {
        id: "create-operations",
        title: "Create Operations",
        content: [
          {
            type: "text",
            content: "Create operations allow users to add new data to your application. This typically involves displaying a form, collecting user input, validating the data, and saving it to the database."
          },
          {
            type: "list",
            title: "Create Operation Flow",
            items: [
              "Display form to user (GET request)",
              "User fills out and submits form (POST request)",
              "Validate form data",
              "Save data to database if valid",
              "Redirect to success page or show errors"
            ]
          },
          {
            type: "text",
            content: "Create operations are essential for any application that allows users to contribute content or add information to the system."
          },
          {
            type: "list",
            title: "Create Operation Examples",
            items: [
              "User Registration: Creating new user accounts",
              "Blog Posts: Creating new articles or posts",
              "Product Creation: Adding new products to catalog",
              "Comments: Adding comments to posts or articles",
              "Profile Creation: Setting up user profiles"
            ]
          },
          {
            type: "list",
            title: "Best Practices for Create Operations",
            items: [
              "Always validate user input",
              "Provide clear error messages",
              "Use appropriate form fields and widgets",
              "Implement proper security measures",
              "Provide user feedback on success/failure"
            ]
          },
          {
            type: "text",
            content: "Django forms make create operations straightforward by handling form rendering, validation, and data processing automatically."
          }
        ]
      },
      {
        id: "read-operations",
        title: "Read Operations",
        content: [
          {
            type: "text",
            content: "Read operations retrieve and display data from the database. This is the most common operation in web applications, as users spend most of their time viewing content."
          },
          {
            type: "list",
            title: "Types of Read Operations",
            items: [
              "List Views: Display multiple records (e.g., blog posts, products)",
              "Detail Views: Show single record with full information",
              "Search Results: Filtered data based on user queries",
              "Dashboard Views: Aggregated data and statistics",
              "User Profiles: Personal information and activity"
            ]
          },
          {
            type: "text",
            content: "Read operations are typically the fastest and most frequently used operations in web applications."
          },
          {
            type: "list",
            title: "Read Operation Considerations",
            items: [
              "Performance: Optimize queries for speed",
              "Pagination: Handle large datasets efficiently",
              "Filtering: Allow users to narrow down results",
              "Sorting: Provide meaningful data organization",
              "Caching: Store frequently accessed data"
            ]
          },
          {
            type: "list",
            title: "Read Operation Examples",
            items: [
              "Blog: Display list of posts, individual post details",
              "E-commerce: Product catalog, product details",
              "Social Media: News feed, user profiles",
              "Dashboard: Analytics, user statistics",
              "Search: Filtered results based on queries"
            ]
          },
          {
            type: "text",
            content: "Django's ORM provides powerful querying capabilities that make read operations efficient and flexible."
          }
        ]
      },
      {
        id: "update-operations",
        title: "Update Operations",
        content: [
          {
            type: "text",
            content: "Update operations allow users to modify existing data. This typically involves pre-populating a form with existing data, allowing users to make changes, and saving the updated information."
          },
          {
            type: "list",
            title: "Update Operation Flow",
            items: [
              "Retrieve existing record from database",
              "Display form with pre-populated data (GET request)",
              "User modifies and submits form (POST request)",
              "Validate updated data",
              "Save changes to database if valid",
              "Redirect to success page or show errors"
            ]
          },
          {
            type: "text",
            content: "Update operations require careful consideration of permissions and data integrity."
          },
          {
            type: "list",
            title: "Update Operation Examples",
            items: [
              "User Profile: Update personal information",
              "Blog Posts: Edit article content",
              "Product Information: Update product details",
              "Account Settings: Change preferences",
              "Content Management: Modify existing content"
            ]
          },
          {
            type: "list",
            title: "Update Operation Best Practices",
            items: [
              "Verify user permissions before allowing updates",
              "Validate all changes before saving",
              "Provide clear feedback on successful updates",
              "Handle partial updates appropriately",
              "Maintain data integrity and consistency"
            ]
          },
          {
            type: "text",
            content: "Django forms make update operations easy by automatically handling form population and data processing."
          }
        ]
      },
      {
        id: "delete-operations",
        title: "Delete Operations",
        content: [
          {
            type: "text",
            content: "Delete operations remove data from the database. These operations should be handled carefully as they can result in permanent data loss."
          },
          {
            type: "list",
            title: "Delete Operation Flow",
            items: [
              "Display confirmation page or dialog",
              "User confirms deletion",
              "Validate permissions and constraints",
              "Remove data from database",
              "Handle related data appropriately",
              "Redirect to appropriate page"
            ]
          },
          {
            type: "text",
            content: "Delete operations require special attention to data integrity and user experience."
          },
          {
            type: "list",
            title: "Delete Operation Considerations",
            items: [
              "Confirmation: Always require user confirmation",
              "Permissions: Verify user has delete rights",
              "Dependencies: Handle related data appropriately",
              "Soft Delete: Consider marking as deleted instead of removing",
              "Audit Trail: Log deletion activities for security"
            ]
          },
          {
            type: "list",
            title: "Delete Operation Examples",
            items: [
              "User Accounts: Delete user profiles",
              "Blog Posts: Remove articles",
              "Products: Remove items from catalog",
              "Comments: Delete user comments",
              "Files: Remove uploaded documents"
            ]
          },
          {
            type: "text",
            content: "Django provides built-in support for delete operations through its ORM, but you should always implement proper confirmation and permission checks."
          }
        ]
      },
      {
        id: "form-handling",
        title: "Form Handling & Processing",
        content: [
          {
            type: "text",
            content: "Form handling is a critical aspect of web development. Django provides a comprehensive form system that handles everything from rendering to processing and validation."
          },
          {
            type: "list",
            title: "Form Processing Steps",
            items: [
              "Form Display: Render form with appropriate fields",
              "Data Collection: Capture user input",
              "Validation: Check data against rules and constraints",
              "Processing: Handle valid data (save, redirect, etc.)",
              "Error Handling: Display errors for invalid data"
            ]
          },
          {
            type: "text",
            content: "Django forms automate much of this process, making it easier to create robust, user-friendly forms."
          },
          {
            type: "list",
            title: "Form Handling Best Practices",
            items: [
              "Always validate user input",
              "Provide clear error messages",
              "Use appropriate field types and widgets",
              "Implement proper security measures",
              "Handle form state appropriately",
              "Provide user feedback"
            ]
          },
          {
            type: "list",
            title: "Common Form Patterns",
            items: [
              "ModelForm: Forms that work directly with models",
              "Custom Forms: Forms with custom validation logic",
              "FormSets: Handling multiple forms",
              "Wizard Forms: Multi-step form processes",
              "Dynamic Forms: Forms that change based on user input"
            ]
          },
          {
            type: "text",
            content: "Django's form system is highly extensible, allowing you to create custom forms and validation logic for complex requirements."
          }
        ]
      },
      {
        id: "redirects-routing",
        title: "Redirects & Routing for CRUD",
        content: [
          {
            type: "text",
            content: "Redirects and routing are essential for creating a smooth user experience in CRUD applications. They help users navigate between different views and provide feedback on their actions."
          },
          {
            type: "list",
            title: "What are Redirects?",
            items: [
              "HTTP responses that tell the browser to go to a different URL",
              "Used after successful form submissions",
              "Prevent form resubmission on page refresh",
              "Provide better user experience",
              "Follow the Post/Redirect/Get pattern"
            ]
          },
          {
            type: "text",
            content: "Redirects are crucial for maintaining a good user experience and preventing common web application issues."
          },
          {
            type: "list",
            title: "Common Redirect Patterns",
            items: [
              "After Create: Redirect to detail view or list view",
              "After Update: Redirect to detail view or list view",
              "After Delete: Redirect to list view or home page",
              "After Login: Redirect to intended page or dashboard",
              "After Logout: Redirect to home page or login page"
            ]
          },
          {
            type: "list",
            title: "Routing for CRUD Operations",
            items: [
              "List Routes: Display multiple records (/posts/, /products/)",
              "Detail Routes: Show single record (/posts/123/, /products/456/)",
              "Create Routes: Display creation forms (/posts/create/, /products/new/)",
              "Update Routes: Display edit forms (/posts/123/edit/, /products/456/edit/)",
              "Delete Routes: Handle deletion (/posts/123/delete/, /products/456/delete/)"
            ]
          },
          {
            type: "text",
            content: "Proper routing and redirects create a logical flow that users can easily understand and navigate."
          }
        ]
      },
      {
        id: "security-considerations",
        title: "Security Considerations for Forms",
        content: [
          {
            type: "text",
            content: "Security is paramount when handling user input and forms. Django provides many built-in security features, but understanding them helps you build more secure applications."
          },
          {
            type: "list",
            title: "Form Security Features",
            items: [
              "CSRF Protection: Prevent cross-site request forgery",
              "Input Validation: Ensure data meets requirements",
              "SQL Injection Protection: Automatic query sanitization",
              "XSS Protection: Prevent cross-site scripting",
              "File Upload Security: Validate and secure file uploads"
            ]
          },
          {
            type: "text",
            content: "Django's security features work automatically in most cases, but you should understand them to build secure applications."
          },
          {
            type: "list",
            title: "Security Best Practices",
            items: [
              "Always validate and sanitize user input",
              "Use Django's built-in security features",
              "Implement proper authentication and authorization",
              "Handle sensitive data appropriately",
              "Regularly update Django and dependencies",
              "Follow the principle of least privilege"
            ]
          },
          {
            type: "list",
            title: "Common Security Issues",
            items: [
              "SQL Injection: Malicious SQL code in user input",
              "XSS Attacks: Malicious scripts in user input",
              "CSRF Attacks: Unauthorized actions on behalf of users",
              "File Upload Vulnerabilities: Malicious file uploads",
              "Information Disclosure: Exposing sensitive data"
            ]
          },
          {
            type: "text",
            content: "Understanding security considerations helps you build applications that protect both your users and your data."
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
    </div>
  );
}
