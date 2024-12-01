# Use Node.js base image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install

# Copy the rest of the frontend code
COPY . .

# Copy the rest of the frontend code
COPY .env .env

# Expose frontend port
EXPOSE 5001

# Run the frontend
CMD ["yarn", "dev", "--host"]
