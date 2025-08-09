'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function ModulePage() {
  // Module 1 content
  const module1Content = {
    title: "Introduction to Django",
    subtitle: "What is Django? Install, first project, venv, settings, manage.py, urls. Deep dive into Model-View-Template",
    sections: [
      {
        id: "python-basics",
        title: "Python Basics",
        content: [
          {
            type: "text",
            content: "Before diving into Django, let's ensure you have a solid foundation in Python. Django is built on Python, so understanding Python fundamentals is crucial."
          },
          {
            type: "code",
            language: "python",
            title: "Basic Python Concepts",
            code: `# Variables and Data Types
name = "Django Developer"
age = 25
is_learning = True
skills = ["Python", "Django", "HTML", "CSS"]

# Functions
def greet(name):
    return f"Hello, {name}! Welcome to Django!"

# Classes
class Developer:
    def __init__(self, name, skills):
        self.name = name
        self.skills = skills
    
    def add_skill(self, skill):
        self.skills.append(skill)
        return f"Added {skill} to skillset"`,
          },
          {
            type: "text",
            content: "Key Python concepts you should be familiar with: variables, data types, functions, classes, lists, dictionaries, and basic control structures."
          }
        ]
      },
      {
        id: "what-is-django",
        title: "What is Django?",
        content: [
          {
            type: "text",
            content: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the Model-View-Template (MVT) architectural pattern."
          },
          {
            type: "list",
            title: "Key Features of Django",
            items: [
              "Rapid Development: Django's philosophy is to do things quickly",
              "Secure: Built-in security features protect against common vulnerabilities",
              "Scalable: Can handle high-traffic websites and applications",
              "Versatile: Can build any type of website",
              "Batteries Included: Comes with many built-in features"
            ]
          },
          {
            type: "text",
            content: "Django was created by Adrian Holovaty and Simon Willison in 2003 and was released publicly in 2005. It's named after the jazz guitarist Django Reinhardt."
          }
        ]
      },
      {
        id: "installation",
        title: "Installation & Virtual Environment",
        content: [
          {
            type: "text",
            content: "Setting up a proper development environment is crucial. We'll use virtual environments to isolate our Django projects."
          },
          {
            type: "code",
            language: "bash",
            title: "Creating a Virtual Environment",
            code: `# Create a new directory for your project
mkdir django-course
cd django-course

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\\Scripts\\activate

# On macOS/Linux:
source venv/bin/activate

# Install Django
pip install django

# Verify installation
python -m django --version`,
          },
          {
            type: "text",
            content: "Virtual environments are essential because they allow you to have different versions of Python packages for different projects without conflicts."
          }
        ]
      },
      {
        id: "first-project",
        title: "First Django Project",
        content: [
          {
            type: "text",
            content: "Let's create your first Django project and understand the basic structure."
          },
          {
            type: "code",
            language: "bash",
            title: "Creating a Django Project",
            code: `# Create a new Django project
django-admin startproject myproject
cd myproject

# The project structure will be:
myproject/
├── manage.py
└── myproject/
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    ├── asgi.py
    └── wsgi.py`,
          },
          {
            type: "text",
            content: "The `django-admin startproject` command creates the basic structure for a Django project. Let's explore each file:"
          },
          {
            type: "list",
            title: "Project Files Explained",
            items: [
              "manage.py: Django's command-line utility for administrative tasks",
              "settings.py: Contains all project settings and configuration",
              "urls.py: URL declarations for the project",
              "wsgi.py: WSGI application entry point",
              "asgi.py: ASGI application entry point"
            ]
          }
        ]
      },
      {
        id: "apps-vs-projects",
        title: "Django Apps vs Projects",
        content: [
          {
            type: "text",
            content: "Understanding the difference between Django apps and projects is crucial for building well-organized applications."
          },
          {
            type: "list",
            title: "Django Project",
            items: [
              "A collection of settings and apps that make up a web application",
              "Contains the main configuration files (settings.py, urls.py, wsgi.py)",
              "Can contain multiple apps",
              "Represents the entire web application",
              "Created using `django-admin startproject`"
            ]
          },
          {
            type: "list",
            title: "Django App",
            items: [
              "A Python package that implements a specific functionality",
              "Can be reused across different projects",
              "Contains models, views, templates, and other components",
              "Represents a specific feature or component",
              "Created using `python manage.py startapp`"
            ]
          },
          {
            type: "text",
            content: "Think of a project as a website, and apps as the different features or sections of that website. For example, a blog website might have apps for 'blog posts', 'comments', 'user authentication', etc."
          }
        ]
      },
      {
        id: "creating-apps",
        title: "Creating Django Apps",
        content: [
          {
            type: "text",
            content: "Apps are the building blocks of Django applications. Let's learn how to create and configure them."
          },
          {
            type: "code",
            language: "bash",
            title: "Creating a Django App",
            code: `# Create a new app
python manage.py startapp blog

# The app structure will be:
blog/
├── __init__.py
├── admin.py
├── apps.py
├── models.py
├── tests.py
├── urls.py (you'll create this)
├── views.py
└── migrations/
    └── __init__.py`,
          },
          {
            type: "text",
            content: "After creating an app, you need to register it in your project's settings.py file:"
          },
          {
            type: "code",
            language: "python",
            title: "Registering an App in settings.py",
            code: `# settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',  # Add your new app here
]`,
          },
          {
            type: "text",
            content: "Apps should be focused on a specific functionality. Common app names include 'blog', 'users', 'products', 'orders', etc."
          }
        ]
      },
      {
        id: "app-structure",
        title: "Django App File Structure",
        content: [
          {
            type: "text",
            content: "Each Django app has a specific file structure. Understanding these files is essential for building Django applications."
          },
          {
            type: "list",
            title: "Core App Files",
            items: [
              "__init__.py: Makes the directory a Python package",
              "admin.py: Django admin interface configuration",
              "apps.py: App configuration and metadata",
              "models.py: Database models and schema",
              "tests.py: Unit tests for the app",
              "views.py: View functions and classes",
              "urls.py: URL patterns for the app (you create this)"
            ]
          },
          {
            type: "code",
            language: "python",
            title: "admin.py - Admin Interface",
            code: `# admin.py
from django.contrib import admin
from .models import Post, Comment

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'created_date']
    list_filter = ['created_date', 'author']
    search_fields = ['title', 'content']

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['post', 'author', 'created_date']
    list_filter = ['created_date', 'author']`,
          },
          {
            type: "code",
            language: "python",
            title: "apps.py - App Configuration",
            code: `# apps.py
from django.apps import AppConfig

class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'
    verbose_name = 'Blog'`,
          },
          {
            type: "code",
            language: "python",
            title: "models.py - Database Models",
            code: `# models.py
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_date']`,
          },
          {
            type: "code",
            language: "python",
            title: "views.py - View Functions",
            code: `# views.py
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Post

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

@login_required
def post_create(request):
    # Logic for creating a new post
    pass`,
          },
          {
            type: "code",
            language: "python",
            title: "urls.py - URL Patterns",
            code: `# urls.py (create this file in your app)
from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('<int:pk>/', views.post_detail, name='post_detail'),
    path('create/', views.post_create, name='post_create'),
]`,
          },
          {
            type: "text",
            content: "You'll also need to create a templates directory in your app for HTML templates, and optionally a static directory for CSS, JavaScript, and images."
          }
        ]
      },
      {
        id: "manage-py",
        title: "Understanding manage.py",
        content: [
          {
            type: "text",
            content: "The `manage.py` file is Django's command-line utility for administrative tasks. It's your primary tool for interacting with your Django project."
          },
          {
            type: "code",
            language: "bash",
            title: "Common manage.py Commands",
            code: `# Run the development server
python manage.py runserver

# Create database tables
python manage.py migrate

# Create a new app
python manage.py startapp myapp

# Create a superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic

# Shell for interactive Python
python manage.py shell`,
          },
          {
            type: "text",
            content: "These commands are essential for Django development. You'll use them frequently throughout your Django journey."
          }
        ]
      },
      {
        id: "settings",
        title: "Django Settings",
        content: [
          {
            type: "text",
            content: "The `settings.py` file contains all the configuration for your Django project. Understanding these settings is crucial for proper project setup."
          },
          {
            type: "code",
            language: "python",
            title: "Key Settings in settings.py",
            code: `# settings.py

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'your-secret-key-here'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myapp',  # Your custom app
]

# Database configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Static files (CSS, JavaScript, Images)
STATIC_URL = 'static/'

# Media files
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'`,
          },
          {
            type: "text",
            content: "These settings control everything from database configuration to static files handling. We'll explore more settings as we progress."
          }
        ]
      },
      {
        id: "urls",
        title: "URL Configuration",
        content: [
          {
            type: "text",
            content: "URLs in Django are the entry points to your application. They map web addresses to Python functions (views)."
          },
          {
            type: "code",
            language: "python",
            title: "Basic URL Configuration",
            code: `# myproject/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),  # Include app URLs
]

# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]`,
          },
          {
            type: "text",
            content: "URL patterns use regular expressions to match URLs and route them to the appropriate view functions."
          }
        ]
      },
      {
        id: "mvt-architecture",
        title: "Deep Dive into Model-View-Template (MVT)",
        content: [
          {
            type: "text",
            content: "Django follows the Model-View-Template (MVT) architectural pattern, which is a variation of the Model-View-Controller (MVC) pattern."
          },
          {
            type: "list",
            title: "MVT Components",
            items: [
              "Model: Represents the data structure and database schema",
              "View: Contains the business logic and handles requests",
              "Template: Handles the presentation layer and user interface"
            ]
          },
          {
            type: "code",
            language: "python",
            title: "Model Example",
            code: `# models.py
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.CharField(max_length=100)
    published_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-published_date']`,
          },
          {
            type: "code",
            language: "python",
            title: "View Example",
            code: `# views.py
from django.shortcuts import render
from .models import Article

def home(request):
    articles = Article.objects.all()
    return render(request, 'home.html', {'articles': articles})

def article_detail(request, article_id):
    article = Article.objects.get(id=article_id)
    return render(request, 'article_detail.html', {'article': article})`,
          },
          {
            type: "code",
            language: "html",
            title: "Template Example",
            code: `<!-- templates/home.html -->
<!DOCTYPE html>
<html>
<head>
    <title>My Django Blog</title>
</head>
<body>
    <h1>Welcome to My Blog</h1>
    {% for article in articles %}
        <article>
            <h2>{{ article.title }}</h2>
            <p>By {{ article.author }}</p>
            <p>{{ article.content|truncatewords:50 }}</p>
            <a href="{% url 'article_detail' article.id %}">Read more</a>
        </article>
    {% endfor %}
</body>
</html>`,
          },
          {
            type: "text",
            content: "The MVT pattern promotes separation of concerns, making your code more maintainable and testable. Models handle data, Views handle logic, and Templates handle presentation."
          }
        ]
      }
    ]
  };

  const currentModule = module1Content;

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
                {currentModule.title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl">
              {currentModule.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {currentModule.sections.map((section, index) => (
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
                      
                      {item.type === "code" && (
                        <div>
                          <h3 className="text-yellow-400 font-semibold mb-3">{item.title}</h3>
                          <div className="bg-gray-900 border border-yellow-400/20 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-green-400 text-sm">
                              <code>{item.code}</code>
                            </pre>
                          </div>
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
