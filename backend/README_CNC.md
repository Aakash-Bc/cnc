# CNC Consultant Company - Laravel Backend API

RESTful API backend for the CNC Consultant Company website serving Civil and IT departments.

## Project Structure

```
backend/
├── app/
│   ├── Models/
│   │   ├── Contact.php
│   │   ├── Service.php
│   │   └── BlogPost.php
│   └── Http/Controllers/Api/
│       ├── ContactController.php
│       ├── ServiceController.php
│       └── BlogPostController.php
├── database/
│   └── migrations/
├── config/
│   └── cors.php
└── routes/
    └── api.php
```

## Features

- **Contact Management API** - Receive and store contact form submissions from the React frontend
- **Services API** - Manage and retrieve services filtered by department (Civil/IT)
- **Blog API** - Manage and publish blog posts with department filtering
- **CORS Support** - Configured for React frontend at localhost:5173
- **RESTful Design** - Clean, consistent API endpoints

## Requirements

- PHP 8.1 or higher
- Composer
- MySQL/MariaDB
- Node.js (for XAMPP with npm integration)

## Installation

1. **Clone the repository** (Already in `c:\xampp\htdocs\construction\backend`)

2. **Install PHP dependencies:**
   ```
   composer install
   ```

3. **Generate application key:**
   ```
   php artisan key:generate
   ```

4. **Configure database** in `.env`:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=cnc_project
   DB_USERNAME=root
   DB_PASSWORD=
   ```

5. **Run database migrations:**
   ```
   php artisan migrate
   ```

6. **Start the development server:**
   ```
   php artisan serve
   ```
   API will be available at `http://localhost:8000/api`

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "department": "civil",
    "message": "I would like to know more about your civil engineering services"
  }
  ```

### Services
- **GET** `/api/services` - Get all active services
- **GET** `/api/services/{department}` - Get services by department (civil, it, all)

### Blog Posts
- **GET** `/api/blog` - Get published blog posts (paginated)
- **GET** `/api/blog/{slug}` - Get single blog post by slug

## Models & Migrations

### Contacts Table
Stores customer inquiries with fields: name, email, phone, department, message, status

### Services Table
Available services with: title, description, department, icon, order, active status

### Blog Posts Table
Blog articles with: title, slug, excerpt, content, department, author, image, published status

## Environment Variables

Key variables in `.env`:
- `APP_NAME` - Application name
- `APP_ENV` - Environment (local, production)
- `APP_DEBUG` - Debug mode (true/false)
- `DB_*` - Database connection settings
- `CORS_ALLOWED_ORIGINS` - Configured for React frontend

## CORS Configuration

CORS is configured in `config/cors.php` to allow requests from:
- `http://localhost:5173` - React development server
- `http://127.0.0.1:5173` - Alternative localhost address

## Testing the API

Use tools like Postman or cURL to test endpoints:

```bash
# Test contact submission
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "123-456-7890",
    "department": "civil",
    "message": "Test message with more than 10 characters"
  }'
```

## Integration with React Frontend

The React frontend (in `../frontend/react-app`) connects to this API at:
- Base URL: `http://localhost:8000/api`
- Contact form posts to `/api/contact`
- Services fetched from `/api/services`
- Blog posts fetched from `/api/blog`

## Support

For issues or questions, refer to the [Laravel documentation](https://laravel.com/docs).
