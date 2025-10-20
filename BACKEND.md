# 🚀 OneStep Backend API

Welcome to the **OneStep** backend — a scalable and modular backend built with **NestJS**, **Prisma ORM**, and **JWT-based authentication**, designed to manage **Courses**, **Internships**, **Jobs**, and related user applications.

> 📌 Repository: [onestep-backend](https://github.com/your-org/onestep-backend)

---

## 📁 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: JWT (Bearer Token)
- **Database**: PostgreSQL (or your configured DB)
- **Package Manager**: npm

---

## ⚙️ Project Setup

### ✅ Prerequisites

- Node.js `v16+`
- PostgreSQL
- npm (v8+)

---

### 🚀 Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env

# 3. Run database migrations
npx prisma migrate dev --name init

# 4. Generate Prisma client
npx prisma generate

# 5. Seed the database (optional but recommended)
npx prisma db seed

# 6. Start development server
npm run start:dev
````

---

### 📦 Production Build

```bash
# Build the project
npm run build

# Start the production server
npm start
```

---

## 🔐 Authentication

* All **Private APIs** require a valid **JWT token**.
* Pass it via the `Authorization` header:

```http
Authorization: Bearer <your-token>
```

---

## 🌐 API Base URL

```
http://localhost:5000/api
```

Set this as your global prefix in frontend or Postman configs.

---

## 📚 API Endpoints

### 1. **Auth** (`/auth`)

| Method | Endpoint           | Access |
| ------ | ------------------ | ------ |
| GET    | `/register`        | Public |
| POST   | `/login`           | Public |
| PATCH  | `/forgot-password` | Public |

---

### 2. **Courses** (`/courses`)

| Method | Endpoint                                                            | Access  |
| ------ | ------------------------------------------------------------------- | ------- |
| POST   | `/`                                                                 | Private |
| GET    | `/?limit=&offset=&category=&skillLevel=&providedBy=&sortBy=&order=` | Public  |
| GET    | `/list?filter=`                                                     | Public  |
| GET    | `/:id`                                                              | Public  |
| PATCH  | `/:id`                                                              | Private |
| DELETE | `/:id`                                                              | Private |

---

### 3. **Internships** (`/internships`)

| Method | Endpoint                                                              | Access  |
| ------ | --------------------------------------------------------------------- | ------- |
| POST   | `/`                                                                   | Private |
| GET    | `/?limit=&offset=&company=&title=&location=&workMode=&sortBy=&order=` | Public  |
| GET    | `/list?filter=`                                                       | Public  |
| GET    | `/:id`                                                                | Public  |
| DELETE | `/:id`                                                                | Private |

---

### 4. **Jobs** (`/jobs`)

| Method | Endpoint                                                                      | Access  |
| ------ | ----------------------------------------------------------------------------- | ------- |
| POST   | `/`                                                                           | Private |
| GET    | `/?limit=&offset=&company=&title=&location=&jobTime=&jobType=&sortBy=&order=` | Public  |
| GET    | `/list?filter=`                                                               | Public  |
| GET    | `/:id`                                                                        | Public  |
| DELETE | `/:id`                                                                        | Private |

---

### 5. **User Courses** (`/user-courses`)

| Method | Endpoint      | Access  |
| ------ | ------------- | ------- |
| POST   | `/:id/enroll` | Private |

---

### 6. **Internship Applications** (`/intern-applications`)

| Method | Endpoint     | Access  |
| ------ | ------------ | ------- |
| POST   | `/:id/apply` | Private |

---

### 7. **Job Applications** (`/job-applications`)

| Method | Endpoint     | Access  |
| ------ | ------------ | ------- |
| POST   | `/:id/apply` | Private |

---

### 8. **User** (`/users`)

| Method | Endpoint     | Access  |
| ------ | ------------ | ------- |
| GET    | `/profile`   | Private |
| PATCH  | `/profile`   | Private |
| GET    | `/dashboard` | Private |

---

## 🔍 Query Parameters (Accepted Values)

| Query        | Accepted Values                                                                           |
| ------------ | ----------------------------------------------------------------------------------------- |
| `limit`      | Integer (e.g., 10)                                                                        |
| `offset`     | Integer (e.g., 0)                                                                         |
| `category`   | `"Computer Science"`, `"AI Development"`, etc. (spaces as `+`)                            |
| `skillLevel` | `"Beginner"`, `"Intermediate"`, `"Advanced"`                                              |
| `providedBy` | `"Government"`, `"Letsupgrade"`, `"Private"`                                              |
| `company`    | Any company name (e.g., `"TCS"`)                                                          |
| `title`      | Job/Internship title (e.g., `"Software Engineer"`)                                        |
| `location`   | City or region name (e.g., `"Bangalore"`)                                                 |
| `workMode`   | `"Online"`, `"Offline"`, `"Hybrid"`                                                       |
| `jobTime`    | `"Full-Time"`, `"Part-Time"`                                                              |
| `jobType`    | `"Field"`, `"Remote"`, `"Office"`                                                         |
| `sortBy`     | Any table field (e.g., `created_at`, `title`, `company`)                                  |
| `order`      | `"ASC"` or `"DESC"`                                                                       |
| `filter`     | Field name (e.g., `category`, `provided_by`, `job_title`) → returns list of unique values |

---

## 🛠 Environment Variables

Copy the template and fill in your local DB and JWT values:

```bash
cp .env.example .env
```

Required variables:

* `DATABASE_URL`
* `JWT_SECRET`
* `PORT` (optional, default: `5000`)

---

## 📫 Want to Contribute?

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 🧾 License

This project is licensed under the **MIT License**.

---

## 👥 Maintainers

* [Thanmay Sadguru Musa](https://github.com/SeveredSeikyo) - Backend Developer @ OneStep

---