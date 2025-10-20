# BACKEND API LIST - USAGE & INSTRUCTIONS

***SET GLOBAL BACKEND PREFIX URL = http://localhost:5000/api***

### APIs LIST
##### 1. AUTH ('/auth')
- GET /register (PUBLIC)
- POST /login (PUBLIC)
- PATCH /forgot-password (PUBLIC)

##### 2. COURSES ('/courses')
- POST / (PRIVATE)
- GET /?limit=&offset=&category=&skillLevel=&providedBy=&sortBy=&order= (PUBLIC)
- GET /list?filter= (PUBLIC)
- GET /:id (PUBLIC)
- PATCH /:id (PRIVATE)
- DELETE /:id (PRIVATE)

##### 3. INTERNSHIPS ('/internships')
- POST / (PRIVATE)
- GET /?limit=&offset=&company=&title=&location=&workMode=&sortBy=&order= (PUBLIC)
- GET /list?filter= (PUBLIC)
- GET /:id (PUBLIC)
- DELETE /:id (PRIVATE)

##### 4. JOBS ('/jobs')
- POST / (PRIVATE)
- GET /?limit=&offset=&company=&title=&location=&jobTime=&jobType=&sortBy=&order= (PUBLIC)
- GET /list?filter= (PUBLIC)
- GET /:id (PUBLIC)
- DELETE /:id (PRIVATE)

##### 5. USER-COURSES ('/user-courses')
- POST /:id/enroll (PRIVATE)

##### 6. USER-INTERNSHIPS-APPLICATIONS ('/intern-applications')
- POST /:id/apply (PRIVATE)

##### 7. USER-JOBS-APPLICATIONS ('/job-applications')
- POST /:id/apply (PRIVATE)

##### 8. USER ('/users')
- GET /profile (PRIVATE)
- PATCH /profile (PRIVATE)
- GET /dashboard (PRIVATE)

**NOTE:** Private APIs require Authentication (jwtToken)

### SCHEMA/TABLE STRUCTURE

#### DB DECLARATIONS
- Uses POSTGRESQL DB
- Database Name: onestep
- ORM: Prisma

##### ENUM DECLARATIONS

- ROLE -> STUDENT, INSTRUCTOR, RECRUITER, ADMIN
- ApplicationStatus -> IN_REVIEW, ACCEPTED, REJECTED, WITHDRAW

#### 1. USER TABLE

| Field | Data Type | Declarations |
| :-----| :----------:| :----------- |
| id | Int | PRIMARY KEY, AUTOINCREMENT |
| hashed_id | String | UNIQUE, UUID |
| full_name | String | VARCHAR(100) |
| email | String | UNIQUE, VARCHAR(100) |
| password_hash | String | VARCHAR(255) |
| phone_number | String? | UNIQUE, VARCHAR(20) |
| role | Role (ENUM) | DEFAULT(STUDENT) |
| profile_pic_url | String? | VARCHAR(255) |
| created_at | DateTime | DEFAULT(NOW), Timestamp(6) |
| updated_at | DateTime | UPDATEDAT, Timestamp(6) |
| courses | Relation | One-to-many with `UserCourse[]` |
| internships | Relation | One-to-many with `UserInternshipApplication[]` |
| jobs | Relation | One-to-many with `UserJobApplication[]` |

#### 2. COURSE TABLE

| Field | Data Type | Declarations |
| :-----| :----------:| :----------- |
| id | Int | PRIMARY KEY, AUTOINCREMENT |
| hashed_id | String | UNIQUE, UUID |
| course_name | String | VARCHAR(255) |
| category | String | VARCHAR(255) |
| course_description | String? |
| skill_level | String? | VARCHAR(255) |
| duration | String? | VARCHAR(255) |
| mode | String? | VARCHAR(255) |
| provided_by | String? | VARCHAR(255) |
| certificate | String? | VARCHAR(255) |
| url | String? | VARCHAR(255) |
| cost | String? | VARCHAR(255) |
| instructor | String? | VARCHAR(255) |
| language | String? | VARCHAR(255) |
| users | Relation | One-to-many with `UserCourse[]` |

#### 3. INTERNSHIP TABLE

| Field | Data Type | Declarations |
| :---- | :-------: | :----------- |
| id | Int | PRIMARY KEY, AUTOINCREMENT |
| hashed_id | String | UNIQUE, UUID |
| internship_type | String | VARCHAR(255) |
| internship_title | String | VARCHAR(255) |
| internship_description | String? |
| company | String | VARCHAR(255) |
| duration | Int? |                          
| stipend | Int? |                       
| internship_location | String? | VARCHAR(255) |
| paid_unpaid | String? | VARCHAR(255) |
| work_mode | String? | VARCHAR(255) |
| application_end_date | DateTime? | DATE |
| no_of_positions | Int? |
| season | String? | VARCHAR(50) |
| applications | Relation | One-to-many with `UserInternshipApplication[]` |

#### 4. JOB TABLE

| Field | Data Type | Declarations |
| :------ | :--------: | :-------- |
| id                   | Int       | PRIMARY KEY, AUTOINCREMENT              |
| hashed_id            | String    | UNIQUE, UUID                            |
| job_title            | String    | VARCHAR(255)                            |
| company              | String    | VARCHAR(255)                            |
| job_role             | String    | VARCHAR(255)                            |
| job_description      | String?   |                                         |
| experience_required  | String?   | VARCHAR(255)                            |
| job_time             | String?   | VARCHAR(255)                            |
| job_category         | String?   | VARCHAR(255)                            |
| skills_required      | String?   | VARCHAR(255)                            |
| job_location         | String?   | VARCHAR(255)                            |
| work_type            | String?   | VARCHAR(255)                            |
| salary               | Int?      |                                         |
| interview_type       | String?   | VARCHAR(255)                            |
| application_end_date | DateTime? | DATE                                    |
| education_required   | String?   | VARCHAR(255)                            |
| sector               | String?   | VARCHAR(255)                            |
| applications         | Relation  | One-to-many with `UserJobApplication[]` |

#### 5. USERCOURSE TABLE 

| Field         | Data Type | Declarations                                                       |
| ------------- | --------- | ------------------------------------------------------------------ |
| id            | Int       | PRIMARY KEY, AUTOINCREMENT                                         |
| hashed_id     | String    | UNIQUE, UUID                                                       |
| user_id       | String    | Foreign Key → `User.hashed_id`                                     |
| course_id     | String    | Foreign Key → `Course.hashed_id`                                   |
| progress      | Int?      | DEFAULT 0                                                          |
| status        | String?   | DEFAULT "enrolled", VARCHAR(50)                                    |
| enrolled_at   | DateTime? | DEFAULT NOW(), TIMESTAMP(6)                                        |
| last_accessed | DateTime? | TIMESTAMP(6)                                                       |
| course        | Relation  | Many-to-One with `Course` (onDelete: CASCADE, onUpdate: NO ACTION) |
| user          | Relation  | Many-to-One with `User` (onDelete: CASCADE, onUpdate: NO ACTION)   |
| Indexes       |           | INDEX on `user_id`, INDEX on `course_id`                           |

#### 6. USERINTERNSHIPAPPLICATION TABLE

| Field              | Data Type | Declarations                                                           |
| ------------------ | --------- | ---------------------------------------------------------------------- |
| id                 | Int       | PRIMARY KEY, AUTOINCREMENT                                             |
| hashed_id          | String    | UNIQUE, UUID                                                           |
| user_id            | String    | Foreign Key → `User.hashed_id`                                         |
| internship_id      | String    | Foreign Key → `Internship.hashed_id`                                   |
| application_status | Enum      | DEFAULT `IN_REVIEW` (Enum: `ApplicationStatus`)                        |
| applied_at         | DateTime? | DEFAULT NOW(), TIMESTAMP(6)                                            |
| internship         | Relation  | Many-to-One with `Internship` (onDelete: CASCADE, onUpdate: NO ACTION) |
| user               | Relation  | Many-to-One with `User` (onDelete: CASCADE, onUpdate: NO ACTION)       |
| Indexes            |           | INDEX on `user_id`, INDEX on `internship_id`                           |

#### 7. USERJOBAPPLICATION TABLE

| Field              | Data Type | Declarations                                                     |
| ------------------ | --------- | ---------------------------------------------------------------- |
| id                 | Int       | PRIMARY KEY, AUTOINCREMENT                                       |
| hashed_id          | String    | UNIQUE, UUID                                                     |
| user_id            | String    | Foreign Key → `User.hashed_id`                                   |
| job_id             | String    | Foreign Key → `Job.hashed_id`                                    |
| application_status | Enum      | DEFAULT `IN_REVIEW` (Enum: `ApplicationStatus`)                  |
| applied_at         | DateTime? | DEFAULT NOW(), TIMESTAMP(6)                                      |
| job                | Relation  | Many-to-One with `Job` (onDelete: CASCADE, onUpdate: NO ACTION)  |
| user               | Relation  | Many-to-One with `User` (onDelete: CASCADE, onUpdate: NO ACTION) |
| Indexes            |           | INDEX on `user_id`, INDEX on `job_id`                            |

##### **NOTE:** hashed_id (uuid) is used for every API with param 'id'

### API DEMONSTRATION

##### 1. AUTH Routes
- POST /register

    **REQUEST**
    ```http
    POST http://localhost:5000/api/auth/register
    Content-Type: application/json
    
    {
      "full_name": "OneStep",
      "email": "onestep@gmail.com",
      "password_hash": "Onestep@123",
      "role": "RECRUITER"
    }
    ```
    **RESPONSE**
    ```json
    {
      "message": "Registration Successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGluYXZAZ21haWwuY29tIiwic3ViIjoyLCJpYXQiOjE3NTg5MDc3MjMsImV4cCI6MTc1ODk5NDEyM30.3yN5WHTL_nDYegsoD8KQ_NMY4qCOMb6dSifVQ4dc3nA"
    }
    ```

- POST /login

    **REQUEST**
    ```http
    POST http://localhost:5000/api/auth/login 
    Content-Type: application/json
    
    {
      "email": "onestep@gmail.com",
      "password_hash": "Onestep@123"
    }
    ```
    **RESPONSE**
    ```json
    {
      "message": "Login Successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZXN0ZXBAZ21haWwuY29tIiwic3ViIjoiOGJmYTIxMDUtNzYzMC00NmQ0LWE0ZmYtZjRkYjI3YTE3NGU5IiwiaWF0IjoxNzU4OTA4MDAzLCJleHAiOjE3NTg5OTQ0MDN9.TOfKinFbiPdOozBU5oBQsWB22cJfrJ-T9mOG_hTo3zs"
    }
    ```

- PATCH /forgot-password

    **REQUEST**
    ```http
    PATCH http://localhost:5000/api/auth/forgot-password
    Content-Type: application/json
    
    {
      "email": "abhinav@gmail.com",
      "password_hash": "Abhinav@123"
    }
    ```
    **RESPONSE**
    ```json
    {
      "message": "Password updated successfully"
    }
    ```

##### 2. COURSE Routes
- POST /
    **NOTE:** Only Users with Role "INSTRUCTOR" or "ADMIN" can POST a Course

    **REQUEST**
    ```http
    POST http://localhost:5000/api/courses
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkZW15QGdtYWlsLmNvbSIsInN1YiI6MywiaWF0IjoxNzU4OTA5MTg4LCJleHAiOjE3NTg5OTU1ODh9.r9oTH55NzVdMeqgEizHtZR5tyDdnX3Wpq3rjdVlRoXY
    Content-Type: application/json
    
    {
      "course_name": "Data Structures and Algorithms",
      "category": "Computer Science",
      "course_description": "Covers arrays, stacks, queues, linked lists, trees, and graphs in C/C++.",
      "skill_level": "Intermediate",
      "duration": "8 weeks",
      "mode": "Scheduled",
      "provided_by": "Government",
      "certificate": "Yes (Free / Paid Proctored Exam)",
      "url": "https://onlinecourses.nptel.ac.in/",
      "cost": "Free / ₹1000 for Certificate",
      "instructor": "Prof. Naveen Garg",
      "language": "English"
    }
    ```
    **RESPONSE**
    ```json
    {
      "message": "Course Post Created Successfully"
    }
    ```
- GET /?limit=&offset=&category=&skillLevel=&providedBy=&sortBy=&order=
    
    ##### 1. Without Query Parameters
    
    **REQUEST**
    ```http
    GET http://localhost:5000/api/courses
    ```
    **RESPONSE**
    ```json
    [
      {
        "id": 1,
        "hashed_id": "cb4e7225-cd7d-40aa-ae7a-5b824f58136b",
        "course_name": "Data Structures and Algorithms",
        "category": "Computer Science",
        "course_description": "Covers arrays, stacks, queues, linked lists, trees, and graphs in C/C++.",
        "skill_level": "Intermediate",
        "duration": "8 weeks",
        "mode": "Scheduled",
        "provided_by": "Government",
        "certificate": "Yes (Free / Paid Proctored Exam)",
        "url": "https://onlinecourses.nptel.ac.in/",
        "cost": "Free / ₹1000 for Certificate",
        "instructor": "Prof. Naveen Garg",
        "language": "English"
      },
      .
      .
      .
      .
    ]
    ```
    ##### 2. With Query Parameters
    
    **REQUEST**
    ```http
    GET http://localhost:5000/api/courses?limit=2&category=Computer+Science
    ```
    **RESPONSE**
    ```json
    [
      {
        "id": 1,
        "hashed_id": "cb4e7225-cd7d-40aa-ae7a-5b824f58136b",
        "course_name": "Data Structures and Algorithms",
        "category": "Computer Science",
        "course_description": "Covers arrays, stacks, queues, linked lists, trees, and graphs in C/C++.",
        "skill_level": "Intermediate",
        "duration": "8 weeks",
        "mode": "Scheduled",
        "provided_by": "Government",
        "certificate": "Yes (Free / Paid Proctored Exam)",
        "url": "https://onlinecourses.nptel.ac.in/",
        "cost": "Free / ₹1000 for Certificate",
        "instructor": "Prof. Naveen Garg",
        "language": "English"
      },
      {
        "id": 2,
        "hashed_id": "cc021e1c-a77f-499b-81d2-b2663a43f78c",
        "course_name": "Large Applications Practicum",
        "category": "Computer Science",
        "course_description": "Hands-on experience in designing and developing large-scale software applications.",
        "skill_level": "Advanced",
        "duration": "4 Weeks",
        "mode": "Scheduled",
        "provided_by": "Government",
        "certificate": "Yes (Free / Paid Proctored Exam)",
        "url": "https://onlinecourses.nptel.ac.in/",
        "cost": "Free / ₹1000 for Certificate",
        "instructor": "Prof. Varun Dutt",
        "language": "English"
      }
    ]
    ```
- GET /list?filter=
    **NOTE:** The filter Query here is used to get list of values of that field
    **REQUEST**
    ```http
    GET http://localhost:5000/api/courses/list?filter=provided_by
    ```
    **RESPONSE**
    ```json
    [
      "Government",
      "Letsupgrade",
      "Internshala Trainings",
      "Private",
      "Google",
      "Udemy",
      "University of Michigan",
      "IBM",
      "University of Pennsylvania",
      "Coursera Instructor Network",
      "Yale University",
      "Peking University",
      "Yonsei University",
      "McMaster University & UC San Diego",
      "University of Edinburgh"
    ]
    ```
- GET /:id
    **REQUEST**
    ```http
    GET http://localhost:5000/api/courses/cb4e7225-cd7d-40aa-ae7a-5b824f58136b
    ```
    **RESPONSE**
    ```json
    {
      "id": 1,
      "hashed_id": "cb4e7225-cd7d-40aa-ae7a-5b824f58136b",
      "course_name": "Data Structures and Algorithms",
      "category": "Computer Science",
      "course_description": "Covers arrays, stacks, queues, linked lists, trees, and graphs in C/C++.",
      "skill_level": "Intermediate",
      "duration": "8 weeks",
      "mode": "Scheduled",
      "provided_by": "Government",
      "certificate": "Yes (Free / Paid Proctored Exam)",
      "url": "https://onlinecourses.nptel.ac.in/",
      "cost": "Free / ₹1000 for Certificate",
      "instructor": "Prof. Naveen Garg",
      "language": "English"
    }
    ```
- PATCH /:id
    **REQUEST**
    ```http
    PATCH http://localhost:5000/api/courses/7b5bc410-02f4-413a-b5d5-89c1eaa0cfae
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkZW15QGdtYWlsLmNvbSIsInN1YiI6MywiaWF0IjoxNzU4OTA5MTg4LCJleHAiOjE3NTg5OTU1ODh9.r9oTH55NzVdMeqgEizHtZR5tyDdnX3Wpq3rjdVlRoXY
    Content-Type: application/json
    
    {
      "instructor": "Prof. Naveen"
    }
    ```
    **RESPONSE**
    ```json
    {
      "message": "Course Updated Successfully."
    }
    ```
- DELETE /:id
    **REQUEST**
    ```http
    DELETE http://localhost:5000/api/courses/bd64015b-6284-4913-b6cc-bd7743b6dc8e
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkZW15QGdtYWlsLmNvbSIsInN1YiI6MywiaWF0IjoxNzU4OTA5MTg4LCJleHAiOjE3NTg5OTU1ODh9.r9oTH55NzVdMeqgEizHtZR5tyDdnX3Wpq3rjdVlRoXY 
    ```
    **RESPONSE**
    ```json
    {
      "message": "Course Deleted Successfully"
    }
    ```
    
##### 3. INTERNSHIPS Routes
- POST /
    **REQUEST**
    ```http
    POST http://localhost:5000/api/internships 
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZXN0ZXBAZ21haWwuY29tIiwic3ViIjoiOGJmYTIxMDUtNzYzMC00NmQ0LWE0ZmYtZjRkYjI3YTE3NGU5IiwiaWF0IjoxNzU4OTExOTE0LCJleHAiOjE3NTg5OTgzMTR9.SONKzAfmoFpCxXUOrQosnyudW1b3GEiqQWsBefhAcGY
    Content-Type: application/json
    
    {
      "internship_type": "Private",
      "internship_title": "Software Development Intern",
      "internship_description": "Assist in software development and testing.",
      "company": "AppNova",
      "duration": 6,
      "stipend": 5000,
      "internship_location": "Pune",
      "paid_unpaid": "Paid",
      "work_mode": "Hybrid",
      "application_end_date": "2025-05-01T00:00:00.000Z",
      "no_of_positions": 19,
      "season": "Summer"
    }
    ```
    **RESPONSE**
    ```json
    {
      "message": "Internship Post Created Successfully"
    }
    ```
- GET /?limit=&offset=&company=&tite=&location=&workMode=&sortBy=&order=
    ##### 1. Without Query Parameters

    **REQUEST**
    ```http
    GET http://localhost:5000/api/internships
    ```
    **RESPONSE**
    ```json
    [
      {
        "id": 1,
        "hashed_id": "c41abd01-0685-40bc-ab1a-bee1b86636c5",
        "internship_type": "Private",
        "internship_title": "Software Development Intern",
        "internship_description": "Assist in software development and testing.",
        "company": "AppNova",
        "duration": 6,
        "stipend": 5000,
        "internship_location": "Pune",
        "paid_unpaid": "Paid",
        "work_mode": "Hybrid",
        "application_end_date": "2025-05-01T00:00:00.000Z",
        "no_of_positions": 19,
        "season": "Summer"
      },
      .
      .
      .
    ]
    ```
    ##### 2. With Query Parameters
    **REQUEST**
    ```http
    GET http://localhost:5000/api/internships?limit=2&company=AppNova
    ```
    **RESPONSE**
    ```json
    [
      {
        "id": 1,
        "hashed_id": "c41abd01-0685-40bc-ab1a-bee1b86636c5",
        "internship_type": "Private",
        "internship_title": "Software Development Intern",
        "internship_description": "Assist in software development and testing.",
        "company": "AppNova",
        "duration": 6,
        "stipend": 5000,
        "internship_location": "Pune",
        "paid_unpaid": "Paid",
        "work_mode": "Hybrid",
        "application_end_date": "2025-05-01T00:00:00.000Z",
        "no_of_positions": 19,
        "season": "Summer"
      },
      {
        "id": 16,
        "hashed_id": "edaa8424-2459-438b-aefa-55191a1fb6b7",
        "internship_type": "Private",
        "internship_title": "Intern",
        "internship_description": "Support the engineering team in prototyping.",
        "company": "AppNova",
        "duration": 12,
        "stipend": 12000,
        "internship_location": "Chennai",
        "paid_unpaid": "Paid",
        "work_mode": "Offline",
        "application_end_date": "2025-05-01T00:00:00.000Z",
        "no_of_positions": 7,
        "season": "Summer"
      }
    ]
    ```
- GET /list?filter=
    **REQUEST**
    ```http
    GET http://localhost:5000/api/internships/list?filter=company
    ```
    **RESPONSE**
    ```json
    [
      "AlgoEdge",
      "BHEL",
      "InnoSoft Solutions",
      "TechCorp Pvt Ltd",
      "DataWiz Inc.",
      "BARC",
      "Doordarshan",
      "AppNova",
      "CodeLabs",
      "NexGen Tech",
      "CloudByte",
      "NIC",
      "ISRO",
      "IIT Bombay"
    ]
    ```
- GET /:id
    **REQUEST**
    ```http
    GET http://localhost:5000/api/internships/808a7550-5c8d-4830-9336-33a2b3ca6d1d
    ```
    **RESPONSE**
    ```json
    {
      "id": 41,
      "hashed_id": "808a7550-5c8d-4830-9336-33a2b3ca6d1d",
      "internship_type": "Private",
      "internship_title": "Software Development Intern",
      "internship_description": "Assist in software development and testing.",
      "company": "AppNova",
      "duration": 6,
      "stipend": 5000,
      "internship_location": "Pune",
      "paid_unpaid": "Paid",
      "work_mode": "Hybrid",
      "application_end_date": "2025-05-01T00:00:00.000Z",
      "no_of_positions": 19,
      "season": "Summer"
    }
    ```
- DELETE /:id
    **REQUEST**
    ```http
    DELETE http://localhost:5000/api/internships/808a7550-5c8d-4830-9336-33a2b3ca6d1d
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZXN0ZXBAZ21haWwuY29tIiwic3ViIjoiOGJmYTIxMDUtNzYzMC00NmQ0LWE0ZmYtZjRkYjI3YTE3NGU5IiwiaWF0IjoxNzU4OTU5MzA4LCJleHAiOjE3NTkwNDU3MDh9.Fn--Aj8aN6QZUIzkZprikOQyDvFS_G2fkYreDvRUk6o
    ```
    **RESPONSE**
    ```json
    {
      "message": "Internship Deleted Successfully."
    }
    ```
##### 4. JOBS Routes
- POST /
    **REQUEST**
    ```http
    POST http://localhost:5000/api/jobs
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZXN0ZXBAZ21haWwuY29tIiwic3ViIjoiOGJmYTIxMDUtNzYzMC00NmQ0LWE0ZmYtZjRkYjI3YTE3NGU5IiwiaWF0IjoxNzU4OTU5MzA4LCJleHAiOjE3NTkwNDU3MDh9.Fn--Aj8aN6QZUIzkZprikOQyDvFS_G2fkYreDvRUk6o
    Content-Type: application/json
    
    {
        "job_title": "Web Developer",
        "company": "OneStep",
        "job_role": "Responsible for tasks related to Web Development",
        "job_description": "Web Developer should create websites",
        "experience_required": "3 years",
        "job_time": "Full-Time",
        "job_category": "Government",
        "skills_required": "MERN Stack, Graphic Design, Customer Service",
        "job_location": "Pune",
        "work_type": "Remote",
        "salary": 26,
        "interview_type": "Written test and interview required",
        "application_end_date": "2025-11-10T00:00:00.000Z",
        "education_required": "Bachelor's or Master's in Computer Science or Engineering; proficiency in Java",
        "sector": "Aerospace"
    }
    ```
    **RESPONSE**
    ```json
    {
      "message": "Job Post Created Successfully"
    }
    ```
- GET /?limit=&offset=&company=&tite=&location=&jobTime=&jobType=&sortBy=&order=
    ##### 1. Without Query Parameters

    **REQUEST**
    ```http
    GET http://localhost:5000/api/jobs
    ```
    **RESPONSE**
    ```json
    [
      {
        "id": 1,
        "hashed_id": "c40741a1-7329-4fd1-a9c4-3e74cc39ed0b",
        "job_title": "Project Management Specialist",
        "company": "Indian Railways",
        "job_role": "Responsible for tasks related to project management specialist",
        "job_description": "Project Management Specialist handles core responsibilities including client management, deliverables, and continuous learning.",
        "experience_required": "1 years",
        "job_time": "Full-Time",
        "job_category": "Government",
        "skills_required": "Machine Learning, Python, Writing",
        "job_location": "Ahmedabad",
        "work_type": "Field",
        "salary": 6,
        "interview_type": "Written test and interview required",
        "application_end_date": "2025-09-14T00:00:00.000Z",
        "education_required": "Bachelor's degree in Engineering or related field; Diploma in Rail Transport and Management preferred; certification in project management (e.g., PMP) is an asset",
        "sector": "Transportation"
      },
      .
      .
      .
    ]
    ```
    ##### 2. With Query Parameters
    **REQUEST**
    ```http
    GET http://localhost:5000/api/jobs?limit=2&jobType=Field
    ```
    **RESPONSE**
    ```json
    [
      {
        "id": 1,
        "hashed_id": "c40741a1-7329-4fd1-a9c4-3e74cc39ed0b",
        "job_title": "Project Management Specialist",
        "company": "Indian Railways",
        "job_role": "Responsible for tasks related to project management specialist",
        "job_description": "Project Management Specialist handles core responsibilities including client management, deliverables, and continuous learning.",
        "experience_required": "1 years",
        "job_time": "Full-Time",
        "job_category": "Government",
        "skills_required": "Machine Learning, Python, Writing",
        "job_location": "Ahmedabad",
        "work_type": "Field",
        "salary": 6,
        "interview_type": "Written test and interview required",
        "application_end_date": "2025-09-14T00:00:00.000Z",
        "education_required": "Bachelor's degree in Engineering or related field; Diploma in Rail Transport and Management preferred; certification in project management (e.g., PMP) is an asset",
        "sector": "Transportation"
      },
      {
        "id": 15,
        "hashed_id": "452ce0e0-c416-4769-a515-14820593ee3d",
        "job_title": "Project Management Specialist",
        "company": "ISRO",
        "job_role": "Responsible for tasks related to project management specialist",
        "job_description": "Project Management Specialist handles core responsibilities including client management, deliverables, and continuous learning.",
        "experience_required": "0 years",
        "job_time": "Full-Time",
        "job_category": "Government",
        "skills_required": "Writing, Data Analysis, Machine Learning",
        "job_location": "Ahmedabad",
        "work_type": "Field",
        "salary": 3,
        "interview_type": "Written test and interview required",
        "application_end_date": "2025-11-19T00:00:00.000Z",
        "education_required": "Bachelor's degree in Engineering; certification in project management preferred",
        "sector": "Aerospace"
      }
    ]
    ```
- GET /list?filter=
    **REQUEST**
    ```http
    GET http://localhost:5000/api/jobs/list?filter=job_location
    ```
    **RESPONSE**
    ```json
    [
      "Hyderabad",
      "Pune",
      "Kolkata",
      "Delhi",
      "Pan India",
      "Ahmedabad",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Remote"
    ]
    ```
- GET /:id
    **REQUEST**
    ```http
    GET http://localhost:5000/api/jobs/41c55975-4dff-4442-90ee-9d83bac5e23e
    ```
    **RESPONSE**
    ```json
    {
      "id": 252,
      "hashed_id": "41c55975-4dff-4442-90ee-9d83bac5e23e",
      "job_title": "Web Developer",
      "company": "OneStep",
      "job_role": "Responsible for tasks related to Web Development",
      "job_description": "Web Developer should create websites",
      "experience_required": "3 years",
      "job_time": "Full-Time",
      "job_category": "Government",
      "skills_required": "MERN Stack, Graphic Design, Customer Service",
      "job_location": "Pune",
      "work_type": "Remote",
      "salary": 26,
      "interview_type": "Written test and interview required",
      "application_end_date": "2025-11-10T00:00:00.000Z",
      "education_required": "Bachelor's or Master's in Computer Science or Engineering; proficiency in Java",
      "sector": "Aerospace"
    }
    ```
- DELETE /:id
    **REQUEST**
    ```http
    DELETE http://localhost:5000/api/jobs/41c55975-4dff-4442-90ee-9d83bac5e23e
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZXN0ZXBAZ21haWwuY29tIiwic3ViIjoiOGJmYTIxMDUtNzYzMC00NmQ0LWE0ZmYtZjRkYjI3YTE3NGU5IiwiaWF0IjoxNzU4OTU5MzA4LCJleHAiOjE3NTkwNDU3MDh9.Fn--Aj8aN6QZUIzkZprikOQyDvFS_G2fkYreDvRUk6o
    ```
    **RESPONSE**
    ```json
    {
      "message": "Jobs Post Deleted Successfully."
    }
    ```
##### 5. USER-COURSES
- POST /:id/enroll
    **REQUEST**
    ```http
    POST http://localhost:5000/api/user-courses/1fb1e01c-899a-4b9c-a5b7-e4dc02df4dfd/enroll
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGluYXZAZ21haWwuY29tIiwic3ViIjoiYzEwNTMxMmYtYmY3ZS00OGViLWEzYzMtZWNkMjkwNGIzMzkyIiwiaWF0IjoxNzU4OTYwMTg1LCJleHAiOjE3NTkwNDY1ODV9.9TexiL6SFrHTjJeD4t8slU4QhbXKv_CEjqLtlfTpqQQ
    ```
    **RESPONSE**
    ```json
    {
      "message": "User Successfully Enrolled."
    }
    ```
##### 6. USER-INTERNSHIP-APPLICATIONS
- POST /:id/apply
    **REQUEST**
    ```http
    POST http://localhost:5000/api/intern-applications/c41abd01-0685-40bc-ab1a-bee1b86636c5/apply
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGluYXZAZ21haWwuY29tIiwic3ViIjoiYzEwNTMxMmYtYmY3ZS00OGViLWEzYzMtZWNkMjkwNGIzMzkyIiwiaWF0IjoxNzU4OTYwMTg1LCJleHAiOjE3NTkwNDY1ODV9.9TexiL6SFrHTjJeD4t8slU4QhbXKv_CEjqLtlfTpqQQ
    ```
    **RESPONSE**
    ```json
    {
      "message": "User Successfully Applied."
    }
    ```
##### 7. USER-JOB-APPLICATIONS
- POST /:id/apply
    **REQUEST**
    ```http
    POST http://localhost:5000/api/job-applications/c40741a1-7329-4fd1-a9c4-3e74cc39ed0b/apply
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGluYXZAZ21haWwuY29tIiwic3ViIjoiYzEwNTMxMmYtYmY3ZS00OGViLWEzYzMtZWNkMjkwNGIzMzkyIiwiaWF0IjoxNzU4OTYwMTg1LCJleHAiOjE3NTkwNDY1ODV9.9TexiL6SFrHTjJeD4t8slU4QhbXKv_CEjqLtlfTpqQQ
    ```
    **RESPONSE**
    ```json
    {
      "message": "User Successfully Applied."
    }
    ```
##### 8. USER ROUTES
- GET /profile
    **REQUEST**
    ```http
    GET http://localhost:5000/api/users/profile
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGluYXZAZ21haWwuY29tIiwic3ViIjoiYzEwNTMxMmYtYmY3ZS00OGViLWEzYzMtZWNkMjkwNGIzMzkyIiwiaWF0IjoxNzU4OTYwMTg1LCJleHAiOjE3NTkwNDY1ODV9.9TexiL6SFrHTjJeD4t8slU4QhbXKv_CEjqLtlfTpqQQ
    ```
    **RESPONSE**
    ```json
    {
      "fullName": "abhinav",
      "email": "abhinav@gmail.com",
      "phoneNumber": null,
      "role": "STUDENT",
      "profileUrl": null
    }
    ```
- PATCH /profile
    **REQUEST**
    ```http
    PATCH http://localhost:5000/api/users/profile
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGluYXZAZ21haWwuY29tIiwic3ViIjoiYzEwNTMxMmYtYmY3ZS00OGViLWEzYzMtZWNkMjkwNGIzMzkyIiwiaWF0IjoxNzU4OTYwMTg1LCJleHAiOjE3NTkwNDY1ODV9.9TexiL6SFrHTjJeD4t8slU4QhbXKv_CEjqLtlfTpqQQ
    Content-Type: application/json
    
    {
        "phone_number": "+91 90000 55555"
    }
    ```
    **RESPONSE**
    ```json
    {
      "fullName": "abhinav",
      "email": "abhinav@gmail.com",
      "phoneNumber": "+91 90000 55555",
      "role": "STUDENT",
      "profileUrl": null
    }
    ```
- GET /dashboard
    **REQUEST**
    ```http
    GET http://localhost:5000/api/users/dashboard
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGluYXZAZ21haWwuY29tIiwic3ViIjoiYzEwNTMxMmYtYmY3ZS00OGViLWEzYzMtZWNkMjkwNGIzMzkyIiwiaWF0IjoxNzU4OTYwMTg1LCJleHAiOjE3NTkwNDY1ODV9.9TexiL6SFrHTjJeD4t8slU4QhbXKv_CEjqLtlfTpqQQ
    ```
    **RESPONSE**
    ```json
    {
      "userData": {
        "id": 2,
        "hashed_id": "c105312f-bf7e-48eb-a3c3-ecd2904b3392",
        "full_name": "abhinav",
        "email": "abhinav@gmail.com",
        "password_hash": "$2b$12$65WLTNczDp7PXU0nnynPZedeClCtGaQcReXJo.q7ernOw0fAwptjy",
        "phone_number": "+91 90000 55555",
        "role": "STUDENT",
        "profile_pic_url": null,
        "created_at": "2025-09-26T17:28:43.321Z",
        "updated_at": "2025-09-27T08:30:02.468Z"
      },
      "userCourseData": [
        {
          "id": 2,
          "hashed_id": "ab54a01c-5ecb-461f-aae2-8daa905a0bc4",
          "user_id": "c105312f-bf7e-48eb-a3c3-ecd2904b3392",
          "course_id": "1fb1e01c-899a-4b9c-a5b7-e4dc02df4dfd",
          "progress": 0,
          "status": "enrolled",
          "enrolled_at": "2025-09-27T08:08:25.660Z",
          "last_accessed": null
        }
      ],
      "userInternshipData": [
        {
          "id": 2,
          "hashed_id": "160e6b25-98ba-4813-a344-d593f91f395e",
          "user_id": "c105312f-bf7e-48eb-a3c3-ecd2904b3392",
          "internship_id": "c41abd01-0685-40bc-ab1a-bee1b86636c5",
          "application_status": "IN_REVIEW",
          "applied_at": "2025-09-27T08:13:55.502Z"
        }
      ],
      "userJobData": [
        {
          "id": 2,
          "hashed_id": "317de1f2-00c7-4164-b67a-6b0648d4476a",
          "user_id": "c105312f-bf7e-48eb-a3c3-ecd2904b3392",
          "job_id": "c40741a1-7329-4fd1-a9c4-3e74cc39ed0b",
          "application_status": "IN_REVIEW",
          "applied_at": "2025-09-27T08:17:55.834Z"
        }
      ]
    }
    ```

### API Query Parameters and Values:

| API Prefix          |     Query    | Accepted Value                                                                 |
| ------------------- | :----------: | ------------------------------------------------------------------------------ |
| `/courses`          |    `limit`   | Integer (e.g. `10`)                                                            |
| `/courses`          |   `offset`   | Integer (e.g. `0`)                                                             |
| `/courses`          |  `category`  | `"Computer Science"`, `"AI Development"`, etc. (spaces as `+`)                 |
| `/courses`          | `skillLevel` | `"Beginner"`, `"Intermediate"`, `"Advanced"`                                   |
| `/courses`          | `providedBy` | `"Government"`, `"Letsupgrade"`, `"Private"`                                   |
| `/courses`          |   `sortBy`   | Any valid field of the `Course` table (e.g. `title`, `createdAt`)              |
| `/courses`          |    `order`   | `ASC` or `DESC`                                                                |
| `/courses/list`     |   `filter`   | A field name (e.g. `category`, `provided_by`) — returns unique values in DB    |
| `/internships`      |    `limit`   | Integer                                                                        |
| `/internships`      |   `offset`   | Integer                                                                        |
| `/internships`      |   `company`  | Internship provider name (e.g. `"Google"`)                                     |
| `/internships`      |    `title`   | Internship title (e.g. `"Frontend Developer"`)                                 |
| `/internships`      |  `location`  | City or region (e.g. `"Mumbai"`)                                               |
| `/internships`      |  `workMode`  | `"Online"`, `"Offline"`, `"Hybrid"`                                            |
| `/internships`      |   `sortBy`   | Any valid field of the `Internship` table                                      |
| `/internships`      |    `order`   | `ASC` or `DESC`                                                                |
| `/internships/list` |   `filter`   | A field name (e.g. `company`, `location`, `work_mode`) — returns unique values |
| `/jobs`             |    `limit`   | Integer                                                                        |
| `/jobs`             |   `offset`   | Integer                                                                        |
| `/jobs`             |   `company`  | Job provider company name (e.g. `"TCS"`)                                       |
| `/jobs`             |    `title`   | Job title (e.g. `"Software Engineer"`)                                         |
| `/jobs`             |  `location`  | City or region (e.g. `"Bangalore"`)                                            |
| `/jobs`             |   `jobTime`  | `"Full-Time"`, `"Part-Time"`                                                   |
| `/jobs`             |   `jobType`  | `"Field"`, `"Remote"`, `"Office"`                                              |
| `/jobs`             |   `sortBy`   | Any valid field of the `Job` table                                             |
| `/jobs`             |    `order`   | `ASC` or `DESC`                                                                |
| `/jobs/list`        |   `filter`   | A field name (e.g. `company`, `job_type`, `location`) — returns unique values  |

#### ✅ Notes:

* **Spaces** in query values should be represented as `+`, e.g., `Computer+Science`.
* **`filter`** endpoints return unique values for a specified field, useful for building dropdowns or filters in the UI.
* **`sortBy`** should be a valid column name in the relevant database table (e.g., `title`, `created_at`, etc.).
* **`order`** controls sorting direction: ascending (`ASC`) or descending (`DESC`).
* These routes are designed to support **flexible filtering, pagination, and sorting** for frontend consumption.

### STATUS CODES AND MEANINGS
| Code | Meaning      |
| ---- | ------------ |
| 200  | OK           |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |
| 500  | Server Error |

### USER ROLES AND USES:
##### 1. STUDENT
- Can Register, Login, Update Password, Update Profile
- Can Apply to Internships, Jobs
- Can Enroll in Courses

##### 2. ADMIN / RECRUITER
- Can Register, Login, Update Password, Update Profile
- Can Post Jobs / Internships
- Can Delete Jobs / Internships
- Can Accept / Reject Student Applications (under Development)

##### 3. ADMIN / INSTRUCTOR
- Can Register, Login, Update Password, Update Profile
- Can Post Courses
- Can Delete Courses

### DEPLOYMENT GUIDELINES:
- Refer to README.md for Deployment / Runtime Guidelines.