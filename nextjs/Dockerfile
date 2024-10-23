FROM node:18-alpine

WORKDIR /app

# Print Node.js and npm versions
RUN node -v && npm -v

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies with more verbose output
RUN npm install --verbose

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]
