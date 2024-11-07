## A course selling website backend

### Admin Routes:

- **POST**:  `/admin/signup`
<br>  Description: Creates a new admin account.
  Input Body: { username: 'admin', password: 'pass' }
 
- **POST**:  `/admin/signin`
<br>  Description: Logs in an admin account.
  Input Body: { username: 'admin', password: 'pass' }
 
- **POST**:  `/admin/courses`
<br>  Description: Creates a new course.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://xyz.com' }
  
- **GET**:  `/admin/courses`
<br>  Description: Returns all the courses.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  

### User routes

- **POST**:  `/users/signup`
<br>  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
 
- **POST**:  `/users/signin`
<br>  Description: Logs in a user account.
  Input: { username: 'user', password: 'pass' }
 
- **GET**:  `/users/courses`
<br>  Description: Lists all the courses.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  
- **POST**:  `/users/courses/:courseId`
<br>  Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
 
- GET:  `/users/purchasedCourses`
<br>  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
 
