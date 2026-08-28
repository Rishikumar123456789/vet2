# ---------- Stage 1: Build the CRA application ----------

FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files first for better Docker caching
COPY package.json package-lock.json ./

# Install the exact locked dependencies
RUN npm ci

# Copy the remaining project files
COPY . .

# Creates the /app/build production folder
RUN npm run build


# ---------- Stage 2: Serve the application ----------

FROM nginx:alpine


# CRA output is generated inside /app/build
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

# Keep Nginx running as the container's foreground process
CMD ["nginx", "-g", "daemon off;"]
