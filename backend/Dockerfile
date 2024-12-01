# Use Node.js base image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install --production=false

# Copy the rest of the backend code
COPY . .

# Copy the rest of the backend code
COPY .env .env

# Expose backend port
EXPOSE 3001

# Run the backend
CMD ["yarn", "start:dev"]
