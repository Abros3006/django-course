'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function ModelsMigrationsDatabasePage() {
  const moduleContent = {
    title: "Models, Migrations & Database",
    subtitle: "Models, migrations, DB setup, querying, relationships. Superuser, register models, customize admin. Deep dive into databases, ORM, SQL vs NoSQL.",
    sections: [
      {
        id: "database-fundamentals",
        title: "Database Fundamentals",
        content: [
          {
            type: "text",
            content: "Before diving into Django models and migrations, it's essential to understand what databases are, why we need them, and how they work."
          },
          {
            type: "list",
            title: "What is a Database?",
            items: [
              "A structured collection of data organized for efficient storage and retrieval",
              "Acts as a digital filing cabinet for your application's information",
              "Provides a way to store, organize, and manage large amounts of data",
              "Ensures data integrity, consistency, and security"
            ]
          },
          {
            type: "text",
            content: "Databases are the backbone of most web applications. They store everything from user accounts and blog posts to e-commerce products and financial transactions."
          },
          {
            type: "list",
            title: "Why Do We Need Databases?",
            items: [
              "Persistent Storage: Data survives application restarts and server crashes",
              "Data Organization: Structured way to store and organize information",
              "Data Relationships: Connect related data (users and their posts)",
              "Data Integrity: Ensure data accuracy and consistency",
              "Concurrent Access: Multiple users can access data simultaneously",
              "Performance: Fast data retrieval and efficient storage"
            ]
          },
          {
            type: "text",
            content: "Without databases, we'd have to store data in files, which would be inefficient, insecure, and difficult to manage for complex applications."
          }
        ]
      },
      {
        id: "sql-vs-nosql",
        title: "SQL vs NoSQL Databases",
        content: [
          {
            type: "text",
            content: "There are two main categories of databases: SQL (relational) and NoSQL (non-relational). Understanding the differences helps you choose the right database for your project."
          },
          {
            type: "list",
            title: "SQL (Relational) Databases",
            items: [
              "Structured data organized in tables with rows and columns",
              "Uses SQL (Structured Query Language) for data manipulation",
              "Enforces data relationships and constraints",
              "Examples: PostgreSQL, MySQL, SQLite, Oracle",
              "ACID compliance (Atomicity, Consistency, Isolation, Durability)",
              "Best for: Complex queries, data relationships, financial data"
            ]
          },
          {
            type: "list",
            title: "NoSQL (Non-Relational) Databases",
            items: [
              "Flexible data structures (documents, key-value pairs, graphs)",
              "No fixed schema - data structure can evolve",
              "Horizontal scaling and high performance",
              "Examples: MongoDB, Redis, Cassandra, Neo4j",
              "Eventually consistent (BASE model)",
              "Best for: Big data, real-time applications, flexible schemas"
            ]
          },
          {
            type: "text",
            content: "SQL databases are like spreadsheets with relationships, while NoSQL databases are like flexible document storage systems. Each has its strengths and use cases."
          },
          {
            type: "list",
            title: "When to Use SQL vs NoSQL",
            items: [
              "Use SQL when: You need complex queries, data relationships, ACID compliance",
              "Use NoSQL when: You need flexibility, scalability, real-time processing",
              "SQL is better for: E-commerce, banking, content management systems",
              "NoSQL is better for: Social media, IoT, real-time analytics"
            ]
          }
        ]
      },
      {
        id: "orm-explained",
        title: "What is ORM & Why Use It?",
        content: [
          {
            type: "text",
            content: "ORM stands for Object-Relational Mapping. It's a programming technique that lets you interact with databases using object-oriented programming concepts instead of writing raw SQL."
          },
          {
            type: "list",
            title: "What is ORM?",
            items: [
              "A bridge between object-oriented code and relational databases",
              "Converts database tables to Python classes (models)",
              "Converts database rows to Python objects",
              "Handles SQL generation automatically",
              "Provides a high-level interface for database operations"
            ]
          },
          {
            type: "text",
            content: "Think of ORM as a translator between your Python code and the database. Instead of writing SQL queries, you work with Python objects and methods."
          },
          {
            type: "list",
            title: "Benefits of ORM",
            items: [
              "Productivity: Write less code, focus on business logic",
              "Database Agnostic: Switch databases without changing code",
              "Security: Automatic SQL injection protection",
              "Maintainability: Cleaner, more readable code",
              "Type Safety: Better error detection and IDE support",
              "Migration Support: Easy database schema changes"
            ]
          },
          {
            type: "list",
            title: "ORM vs Raw SQL",
            items: [
              "ORM: Higher level, more abstract, database-agnostic",
              "Raw SQL: Lower level, more control, database-specific",
              "ORM: Faster development, automatic optimizations",
              "Raw SQL: Better performance for complex queries",
              "ORM: Easier to maintain and modify",
              "Raw SQL: More precise control over queries"
            ]
          },
          {
            type: "text",
            content: "Django's ORM is one of the most powerful and user-friendly ORMs available. It provides a rich set of features while maintaining excellent performance."
          }
        ]
      },
      {
        id: "django-models",
        title: "Django Models & Model Fields",
        content: [
          {
            type: "text",
            content: "Django models are Python classes that represent database tables. They define the structure of your data and the relationships between different pieces of information."
          },
          {
            type: "list",
            title: "What are Django Models?",
            items: [
              "Python classes that inherit from django.db.models.Model",
              "Each model represents a database table",
              "Model fields represent table columns",
              "Model methods represent business logic",
              "Models handle data validation and constraints"
            ]
          },
          {
            type: "text",
            content: "Models are the 'M' in Django's MVT architecture. They define your data structure and provide an interface for interacting with the database."
          },
          {
            type: "list",
            title: "Common Model Field Types",
            items: [
              "CharField: Short text (e.g., names, titles)",
              "TextField: Long text (e.g., blog content, descriptions)",
              "IntegerField: Whole numbers (e.g., age, count)",
              "DecimalField: Decimal numbers (e.g., prices, ratings)",
              "DateTimeField: Date and time (e.g., created_date, updated_date)",
              "BooleanField: True/False values (e.g., is_active, is_published)",
              "EmailField: Email addresses with validation",
              "URLField: URLs with validation",
              "FileField: File uploads",
              "ImageField: Image uploads with validation"
            ]
          },
          {
            type: "text",
            content: "Each field type has specific parameters like max_length, null, blank, default, and choices that control how the data is stored and validated."
          },
          {
            type: "list",
            title: "Model Field Parameters",
            items: [
              "max_length: Maximum length for text fields",
              "null: Allow NULL values in database",
              "blank: Allow empty values in forms",
              "default: Default value for the field",
              "unique: Ensure field values are unique",
              "choices: Predefined choices for the field",
              "help_text: Help text for forms",
              "verbose_name: Human-readable name"
            ]
          }
        ]
      },
      {
        id: "model-relationships",
        title: "Model Relationships & Foreign Keys",
        content: [
          {
            type: "text",
            content: "Real-world data is interconnected. Users have posts, posts have comments, products belong to categories. Django models support various types of relationships to represent these connections."
          },
          {
            type: "list",
            title: "Types of Model Relationships",
            items: [
              "One-to-One: Each record in one table relates to exactly one record in another",
              "One-to-Many: Each record in one table can relate to multiple records in another",
              "Many-to-Many: Records in both tables can relate to multiple records in the other",
              "Self-Referential: A model relates to itself (e.g., employee hierarchy)"
            ]
          },
          {
            type: "text",
            content: "Relationships are defined using special field types that Django provides. These fields automatically handle the database constraints and provide convenient methods for accessing related data."
          },
          {
            type: "list",
            title: "Relationship Field Types",
            items: [
              "ForeignKey: One-to-many relationships (e.g., user and posts)",
              "OneToOneField: One-to-one relationships (e.g., user and profile)",
              "ManyToManyField: Many-to-many relationships (e.g., posts and tags)",
              "GenericForeignKey: Relationships to any model type"
            ]
          },
          {
            type: "text",
            content: "Foreign keys are the most common relationship type. They create a link between two tables where one table references another table's primary key."
          },
          {
            type: "list",
            title: "Relationship Examples",
            items: [
              "User → Posts: One user can have many posts",
              "Post → Comments: One post can have many comments",
              "Category → Products: One category can have many products",
              "Student → Courses: Many students can take many courses",
              "Employee → Manager: Self-referential relationship"
            ]
          },
          {
            type: "text",
            content: "Django automatically creates reverse relationships, so you can access related data from both sides of the relationship."
          }
        ]
      },
      {
        id: "migrations",
        title: "Database Migrations",
        content: [
          {
            type: "text",
            content: "Migrations are Django's way of propagating changes you make to your models into your database schema. They're like version control for your database structure."
          },
          {
            type: "list",
            title: "What are Migrations?",
            items: [
              "Python files that describe database schema changes",
              "Track the evolution of your database structure",
              "Allow you to version control your database schema",
              "Enable team collaboration on database changes",
              "Provide rollback capabilities for schema changes"
            ]
          },
          {
            type: "text",
            content: "When you change your models (add fields, change field types, etc.), Django creates migration files that describe these changes. These migrations can then be applied to update the database schema."
          },
          {
            type: "list",
            title: "Migration Process",
            items: [
              "1. Make changes to your models (add/remove/change fields)",
              "2. Create migration files using 'python manage.py makemigrations'",
              "3. Review the generated migration files",
              "4. Apply migrations using 'python manage.py migrate'",
              "5. Django updates the database schema accordingly"
            ]
          },
          {
            type: "list",
            title: "Migration Commands",
            items: [
              "makemigrations: Create migration files from model changes",
              "migrate: Apply migrations to the database",
              "showmigrations: List all migrations and their status",
              "sqlmigrate: Show SQL for a specific migration",
              "migrate --fake: Mark migrations as applied without running them"
            ]
          },
          {
            type: "text",
            content: "Migrations are essential for maintaining database consistency across different environments (development, staging, production) and for team collaboration."
          }
        ]
      },
      {
        id: "database-querying",
        title: "Database Querying & ORM Queries",
        content: [
          {
            type: "text",
            content: "Django's ORM provides a powerful and intuitive way to query your database. Instead of writing raw SQL, you use Python methods and objects to retrieve and manipulate data."
          },
          {
            type: "list",
            title: "Basic Query Operations",
            items: [
              "all(): Retrieve all records from a table",
              "get(): Retrieve a single record by ID or unique field",
              "filter(): Retrieve records that match certain criteria",
              "exclude(): Retrieve records that don't match criteria",
              "order_by(): Sort records by specific fields",
              "limit/offset: Control the number of records returned"
            ]
          },
          {
            type: "text",
            content: "Django's ORM uses a query builder pattern, which means you can chain multiple methods together to build complex queries."
          },
          {
            type: "list",
            title: "Query Methods & Examples",
            items: [
              "User.objects.all() - Get all users",
              "Post.objects.filter(author=user) - Get posts by specific user",
              "Product.objects.filter(price__gte=100) - Get products >= $100",
              "Comment.objects.order_by('-created_date') - Get comments, newest first",
              "Post.objects.filter(title__icontains='django') - Search for posts containing 'django'"
            ]
          },
          {
            type: "list",
            title: "Advanced Query Features",
            items: [
              "Field lookups: exact, contains, startswith, endswith",
              "Number lookups: gt, gte, lt, lte, range",
              "Date lookups: year, month, day, hour, minute",
              "Aggregation: count, sum, avg, min, max",
              "Annotations: Add computed fields to queries",
              "Select_related: Optimize foreign key queries",
              "Prefetch_related: Optimize many-to-many queries"
            ]
          },
          {
            type: "text",
            content: "Django's ORM automatically generates optimized SQL queries and provides protection against common issues like SQL injection attacks."
          }
        ]
      },
      {
        id: "django-admin",
        title: "Django Admin Interface",
        content: [
          {
            type: "text",
            content: "Django's admin interface is one of its most powerful features. It automatically generates a web-based interface for managing your application's data."
          },
          {
            type: "list",
            title: "What is Django Admin?",
            items: [
              "Automatic web interface for database management",
              "Built-in authentication and authorization",
              "CRUD operations (Create, Read, Update, Delete)",
              "Customizable and extensible",
              "No need to build custom admin panels"
            ]
          },
          {
            type: "text",
            content: "The admin interface is like having a built-in content management system for your application. It's perfect for managing data, especially during development and for non-technical users."
          },
          {
            type: "list",
            title: "Admin Features",
            items: [
              "User authentication and permissions",
              "Automatic form generation from models",
              "Search and filtering capabilities",
              "Bulk operations on multiple records",
              "Custom actions and workflows",
              "Responsive design for mobile devices",
              "Integration with Django's security features"
            ]
          },
          {
            type: "list",
            title: "Setting Up Admin",
            items: [
              "Create a superuser account",
              "Register models in admin.py",
              "Customize admin interface",
              "Configure permissions and access",
              "Add custom actions and methods"
            ]
          },
          {
            type: "text",
            content: "The admin interface is highly customizable. You can control which fields are displayed, add custom actions, modify the interface layout, and integrate with your application's business logic."
          }
        ]
      },
      {
        id: "superuser-admin",
        title: "Creating Superuser & Admin Customization",
        content: [
          {
            type: "text",
            content: "A superuser is a special user account that has full access to the Django admin interface and can perform all administrative tasks."
          },
          {
            type: "list",
            title: "What is a Superuser?",
            items: [
              "Administrative user with full permissions",
              "Can access and modify all data in the admin",
              "Can create, edit, and delete any records",
              "Can manage other users and their permissions",
              "Essential for application administration"
            ]
          },
          {
            type: "text",
            content: "Superusers are typically created during the initial setup of your application and are used for administrative tasks like managing content, users, and system configuration."
          },
          {
            type: "list",
            title: "Admin Customization Options",
            items: [
              "ModelAdmin class: Customize how models appear in admin",
              "list_display: Control which fields are shown in list view",
              "list_filter: Add filters for easy data filtering",
              "search_fields: Enable search functionality",
              "ordering: Set default ordering for records",
              "readonly_fields: Make fields read-only",
              "fieldsets: Organize fields into groups",
              "inlines: Show related models inline"
            ]
          },
          {
            type: "text",
            content: "Admin customization allows you to create a user-friendly interface that matches your application's specific needs and workflows."
          },
          {
            type: "list",
            title: "Admin Best Practices",
            items: [
              "Only give superuser access to trusted individuals",
              "Use custom permissions for different user roles",
              "Customize admin interface for better usability",
              "Add helpful actions and methods",
              "Implement proper security measures",
              "Regularly backup admin data"
            ]
          }
        ]
      },
      {
        id: "database-optimization",
        title: "Database Optimization & Best Practices",
        content: [
          {
            type: "text",
            content: "As your application grows, database performance becomes crucial. Understanding optimization techniques helps ensure your application remains fast and responsive."
          },
          {
            type: "list",
            title: "Database Optimization Techniques",
            items: [
              "Indexing: Add indexes to frequently queried fields",
              "Query optimization: Use select_related and prefetch_related",
              "Database normalization: Organize data efficiently",
              "Caching: Store frequently accessed data in memory",
              "Connection pooling: Reuse database connections",
              "Query analysis: Monitor and analyze slow queries"
            ]
          },
          {
            type: "text",
            content: "Database optimization is an ongoing process. You should regularly monitor your application's performance and make adjustments as needed."
          },
          {
            type: "list",
            title: "Common Performance Issues",
            items: [
              "N+1 queries: Multiple queries for related data",
              "Missing indexes: Slow queries on unindexed fields",
              "Large result sets: Loading too much data at once",
              "Inefficient queries: Complex queries that could be simplified",
              "Connection overhead: Creating too many database connections"
            ]
          },
          {
            type: "list",
            title: "Best Practices",
            items: [
              "Use appropriate field types and constraints",
              "Implement proper indexing strategies",
              "Monitor query performance regularly",
              "Use database transactions when appropriate",
              "Implement proper backup and recovery procedures",
              "Consider database scaling strategies"
            ]
          },
          {
            type: "text",
            content: "Remember that premature optimization can lead to complex, hard-to-maintain code. Focus on writing clean, readable code first, then optimize based on actual performance bottlenecks."
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
