# Full-Stack Next.js & ASP.NET Application
This is a full-stack web application built with Next.js for the frontend and ASP.NET for the backend. The project follows modern web development practices.


## Video Resources

### Authentication
[![Next.js Overview](https://img.youtube.com/vi/QCRuecPlyMo/maxresdefault.jpg)](https://www.youtube.com/watch?v=QCRuecPlyMo)

### Application Overview
[![Next.js Authentication](https://img.youtube.com/vi/lZ8Jgotxo5k/maxresdefault.jpg)](https://www.youtube.com/watch?v=lZ8Jgotxo5k)
## Getting Started

## Tech Stack

### Frontend (Next.js)
- **React & Next.js** – Server-side rendering (SSR) & Static Site Generation (SSG)
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Modern UI styling
- **Auth.js (NextAuth.js)** – Secure authentication (OAuth, JWT, etc.)
- **API Integration** – Fetches data from the ASP.NET backend

### Backend (ASP.NET)
- **ASP.NET Web API** – RESTful API services
- **Entity Framework Core** – Database management
- **JWT Authentication** – Secure API access
- **SQL Server / PostgreSQL** – Database storage
- **Cloud Deployment** – Deployable on **Azure, AWS, or DigitalOcean**

## Features

✅ **Full authentication system** (OAuth, JWT)  
✅ **Secure API endpoints** for data exchange  
✅ **Optimized for performance** (SSR, caching)  
✅ **Modern UI with Tailwind CSS**  
✅ **Cross-platform support** (Desktop & Mobile)  

## Getting Started

### 1️⃣ Clone the Repository
Backend Website(ASP.NET)
```bash
git clone https://github.com/vimukthimadushan94/my-event-backend.git
cd my-event-backend
```

Frontend Website(Next.js App)
```bash
git clone https://github.com/vimukthimadushan94/my-events.git
cd my-events
```

### 2️⃣ Setup & Run the Backend (ASP.NET)

1. Navigate to the backend folder:  
   ```bash
   cd backend
   ```
2. Install dependencies:  
   ```bash
   dotnet restore
   ```
3. Run the backend server:  
   ```bash
   dotnet run
   ```

By default, the API will be available at: `http://localhost:5000`

### 3️⃣ Setup & Run the Frontend (Next.js)

1. Navigate to the frontend folder:  
   ```bash
   cd frontend
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Create an `.env.local` file and set the backend URL:  
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
4. Run the frontend development server:  
   ```bash
   npm run dev
   ```

By default, the Next.js app will be available at: [http://localhost:3000](http://localhost:3000)

## Deployment

### 🚀 Deploying the Backend (ASP.NET)
- You can deploy the **ASP.NET Web API** to **Azure App Services, AWS, or a VPS**
- Update the `.env.local` in the frontend with the deployed API URL

### 🚀 Deploying the Frontend (Next.js)
The easiest way to deploy the Next.js app is using **Vercel**:  

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)  

Alternatively, you can host it on **Netlify, DigitalOcean, or a VPS**.

## Learn More

- 📚 [Next.js Documentation](https://nextjs.org/docs)  
- 📚 [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/)  
- 🔒 [Auth.js (NextAuth.js) Docs](https://authjs.dev/)  

