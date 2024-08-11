# BACKEND ZALO APP 

## 1. Cài đặt

### 1.1. Cài đặt NodeJS

Truy cập trang chủ của NodeJS để tải và cài đặt NodeJS: [https://nodejs.org/en/](https://nodejs.org/en/)
    
### 1.2. Cài đặt MongoDB

Truy cập trang chủ của MongoDB để tải và cài đặt MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

### 1.3. Cài đặt Postman

Truy cập trang chủ của Postman để tải và cài đặt Postman: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

## 2. Cấu hình

### 2.1. Cấu hình MongoDB

- Mở MongoDB Compass

- Tạo một database mới với tên `zalo_app`

- Tạo các collection sau:
    - `users`
    - `events`
    - `attendances`
    - `departments`

### 2.2. Cấu hình file `.env`

Tạo một file `.env` trong thư mục gốc của project với nội dung như sau:

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/zalo_app
```

## 3. Chạy ứng dụng

### 3.1. Cài đặt các thư viện cần thiết

Mở terminal và chạy lệnh sau:

```
npm install
```

### 3.2. Chạy ứng dụng

Mở terminal và chạy lệnh sau:

Chế độ development:

```
npm run dev
```

Chế độ production:


```
npm start
```

hoặc

```
node index.js
```

## 4. Sử dụng

### 4.1. Sử dụng Postman

- Mở Postman

- Sử dụng các API sau:

    - `GET /api/v1/users/phone/:phone`: Lấy thông tin người dùng dựa trên số điện thoại

    - `POST /api/v1/users/register`: Đăng ký người dùng

    - `POST /api/v1/users/phone/:phone`: Cập nhật thông tin người dùng dựa trên số điện thoại

    - `GET /api/v1/users/:zaloId`: Lấy thông tin người dùng dựa trên Zalo ID

    - `GET /api/v1/event/events`: Lấy danh sách sự kiện

    - `POST /api/v1/event/events`: Tạo một sự kiện mới

    - `GET /api/v1/event/events/:id`: Lấy thông tin một sự kiện dựa trên ID

    - `PUT /api/v1/event/events/:id`: Cập nhật thông tin một sự kiện dựa trên ID

    - `DELETE /api/v1/event/events/:id`: Xóa một sự kiện dựa trên ID

    - `GET /api/v1/attendance/attendances`: Lấy danh sách điểm danh

    - `POST /api/v1/attendance/attendances`: Tạo một điểm danh mới

    - `GET /api/v1/attendance/attendances/:id`: Lấy thông tin một điểm danh dựa trên ID

    - `PUT /api/v1/attendance/attendances/:id`: Cập nhật thông tin một điểm danh dựa trên ID

    - `DELETE /api/v1/attendance/attendances/:id`: Xóa một điểm danh dựa trên ID

    - `GET /api/v1/department/departments`: Lấy danh sách phòng ban

    - `POST /api/v1/department/departments`: Tạo một phòng ban mới

    - `GET /api/v1/department/departments/:id`: Lấy thông tin một phòng ban dựa trên ID

    - `PUT /api/v1/department/departments/:id`: Cập nhật thông tin một phòng ban dựa trên ID

    - `DELETE /api/v1/department/departments/:id`: Xóa một phòng ban dựa trên ID

### 4.2. Sử dụng MongoDB Compass

- Mở MongoDB Compass

- Xem dữ liệu trong các collection `users`, `events`, `attendances`, `departments`

## 5. Tham khảo

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)
- [NodeJS](https://nodejs.org/en/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

## 6. Cấu trúc thư mục

```
.idea/                 # Thư mục chứa cấu hình của IDE
node_modules/          # Thư mục chứa các thư viện cần thiết
routes/                # Thư mục chứa các route
    userRoutes.js      # Route liên quan đến người dùng
    eventRoutes.js     # Route liên quan đến sự kiện
    attendanceRoutes.js # Route liên quan đến điểm danh
    departmentRoutes.js # Route liên quan đến phòng ban
controllers/           # Thư mục chứa các controller
    UserController.js   # Controller liên quan đến người dùng
    EventController.js  # Controller liên quan đến sự kiện
    AttendanceController.js # Controller liên quan đến điểm danh
    DepartmentController.js # Controller liên quan đến phòng ban
models/                # Thư mục chứa các model
    User.js            # Model của người dùng
    Event.js           # Model của sự kiện
    Attendance.js      # Model của điểm danh
    Department.js      # Model của phòng ban
config/                # Thư mục chứa các cấu hình
    db.js              # Cấu hình kết nối với MongoDB
index.js               # File chính của ứng dụng
package.json           # File cấu hình của NodeJS
README.md              # File README
```

Models là nơi chứa các schema của các collection trong MongoDB.(schema là cấu trúc của một collection trong MongoDB)

Controllers là nơi chứa các hàm xử lý logic của ứng dụng.(hàm xử lý logic là các hàm thực hiện các thao tác với database)

Routes là nơi chứa các route của ứng dụng.(route là các đường dẫn mà client gửi request đến)

Config là nơi chứa các cấu hình của ứng dụng.(cấu hình là các thông số cần thiết để ứng dụng hoạt động)