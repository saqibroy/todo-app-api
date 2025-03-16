# Use Node.js 20 Alpine (lightweight)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install production dependencies
RUN npm install

# Copy source code
COPY src/ ./src/

# Expose the API port
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV DB_PATH=/app/src/db.json

# Use a volume for persistent data
VOLUME /data

# Start the server
CMD ["node", "src/server.js"]