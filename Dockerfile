# --- STAGE 1: REACT ---

# use node 18 as base image, name this stage builder since it builds the react app
FROM node:18 AS builder

# set environment variables
ARG SECRET_MESSAGE_ARG
ENV VITE_SECRET_MESSAGE=$SECRET_MESSAGE_ARG

ARG BANNER_NAME_ARG
ENV VITE_BANNER_NAME=$BANNER_NAME_ARG

# set working directory
WORKDIR /app

# Copy package.json and package-lock.json to working directory
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy all src files to working directory
COPY . .

# Build the app for production to the build folder
RUN npm run build

# --- STAGE 2: NGINX ---

# nginx state for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/dist .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]


# docker build -t pranav-search .
# docker run --rm -it -p 8080:80 pranav-search