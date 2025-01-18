# Blog Platform

This is a full-stack blog platform built with **React** (frontend) and **Payload CMS** (backend). The platform allows users to view blog posts, read detailed post content, and explore author profiles. The backend is powered by Payload CMS, which provides a flexible and customizable content management system.

---

## Features

### Frontend
- **Home Page**: Displays a list of blog posts with titles, cover images, author details, and publish dates.
- **Post Detail Page**: Shows the full content of a blog post, including the author's bio and profile picture.
- **Responsive Design**: Built with Tailwind CSS for a clean and responsive user interface.
- **Dynamic Routing**: Uses React Router for navigation between the home page and post detail pages.

### Backend
- **Collections**:
  - **Posts**: Manage blog posts with fields for title, body, cover image, publish date, and author.
  - **Authors**: Manage authors with fields for name, bio, and profile picture.
  - **Media**: Handle image uploads for cover images and author profile pictures.
  - **Users**: Authenticate and manage admin users.
- **File Uploads**: Supports image uploads with predefined sizes (thumbnail, card, hero).
- **CORS Support**: Allows the frontend to communicate with the backend.

---

## Technologies Used

### Frontend
- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend.

### Backend
- **Payload CMS**: Headless CMS for managing content.
- **Express**: Web framework for handling HTTP requests.
- **MongoDB**: Database for storing collections.
- **Mongoose**: MongoDB object modeling for Node.js.
- **CORS**: Middleware for enabling cross-origin requests.

---

## Project Structure

### Backend
```
backend/
├── src/
│   ├── collections/
│   │   ├── Authors.ts       # Authors collection configuration
│   │   ├── Media.ts         # Media collection configuration
│   │   ├── Posts.ts         # Posts collection configuration
│   │   └── Users.ts         # Users collection configuration
│   ├── payload.config.ts    # Payload CMS configuration
│   └── server.ts            # Express server setup
├── package.json             # Backend dependencies and scripts
└── .env                     # Environment variables (e.g., MONGO_URI, PAYLOAD_SECRET)
```

### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.js        # Layout component (header and main content)
│   │   └── PostList.js      # Component for displaying a list of posts
│   ├── pages/
│   │   ├── Home.js          # Home page with post list
│   │   └── PostDetailPage.js # Page for displaying a single post
│   ├── App.js               # Main application component
│   └── index.js             # Entry point for the React app
├── package.json             # Frontend dependencies and scripts
└── tailwind.config.js       # Tailwind CSS configuration
```

---

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Git (optional)

### Backend Setup
1. **Clone the repository**:  
   ```bash
    git clone <repository-url>
   cd <project-folder>/backend
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Set up environment variables**:
   Create a `.env` file in the `backend` folder and add the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/blog-platform
   PAYLOAD_SECRET=your-secret-key
   ```

6. **Run the backend**:
   ```bash
   npm run dev
   ```
   The backend will start at `http://localhost:3000`.

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd <project-folder>/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the frontend**:
   ```bash
   npm start
   ```
   The frontend will start at `http://localhost:3001`.

---

## Usage

1. **Access the Admin Panel**:
   - Visit `http://localhost:3000/admin` to access the Payload CMS admin panel.
   - Log in with your credentials (you can create a user via the `/create-first-user` route).

2. **Add Content**:
   - Create authors, upload media, and add blog posts via the admin panel.

3. **View the Blog**:
   - Visit `http://localhost:3001` to view the blog platform.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
