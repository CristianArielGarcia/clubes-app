
# Clubes-App

**Clubes-App** is a full-stack application that includes a NestJS backend and a frontend project. This guide will help you set up and run the application using Docker, eliminating the need to install Node.js or dependencies directly on your machine.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Project Structure

```
clubes-app/
├── backend/
│   ├── src/
│   ├── package.json
│   ├── yarn.lock
│   ├── Dockerfile
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── yarn.lock
│   ├── Dockerfile
├── docker-compose.yml
```

---

## Setup Instructions

### 1. Clone the Repository

Clone the project to your local machine:
```bash
git clone https://github.com/CristianArielGarcia/clubes-app.git
cd clubes-app
```

### 2. Create the .env Files
```bash
cd backend
cp .env.example .env
# or manually create the file and add your environment variables
```

```bash
cd frontend
cp .env.example .env
# or manually create the file and add your environment variables
```

Note: Ensure the .env files uses a port that is not already in use on your machine. Remember, the ports on .env.examples are just examples!

### 3. Start the Application with Docker

Build and start the backend and frontend services:
```bash
docker-compose up
```

This will:
- Build Docker images for the backend and frontend.
- Start the backend on [http://localhost:3000](http://localhost:3000).
- Start the frontend on [http://localhost:5001](http://localhost:5001).

### 4. Stop the Application

To stop the running containers, use:
```bash
docker-compose down
```

---

## Notes for Each Platform

### macOS & Linux
You can directly use the above commands in your terminal.

### Windows
Use PowerShell or Command Prompt with Docker Desktop installed. Ensure Docker is running before executing the commands.

---

## Common Commands

### Rebuild Containers
If you’ve made changes to the `Dockerfile` or `docker-compose.yml`, rebuild the images:
```bash
docker-compose up --build
```

### Check Logs
To view logs for all services:
```bash
docker-compose logs -f
```

### Access the Backend Container
If you need to debug or interact with the backend container:
```bash
docker exec -it clubes-app_backend_1 sh
```

Replace `clubes-app_backend_1` with the name of your backend container.

---

## Troubleshooting

1. **Port Conflicts**  
   If ports `3000` or `5001` are in use, modify the `docker-compose.yml` file to use different ports:
   ```yaml
   ports:
     - "3001:3000" # Backend
     - "5001:5001" # Frontend
   ```

2. **Dependencies Not Found**  
   Ensure you’ve deleted the `node_modules` folders locally and are using the Docker containers for dependency management.

3. **Permission Issues on Linux**  
   If you encounter permission issues, try adding your user to the Docker group:
   ```bash
   sudo usermod -aG docker $USER
   ```

---

## Project Access

- **Backend API:** [http://localhost:3000](http://localhost:3000)
- **Frontend App:** [http://localhost:5001](http://localhost:5001)

---
