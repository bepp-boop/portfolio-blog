FROM node:18-alpine

WORKDIR /app

# Print Node.js and npm versions
RUN node -v && npm -v

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# List files after npm install
RUN ls -la

# Copy the rest of the application
COPY . .

# List files after copying
RUN ls -la

# Print contents of crucial files
RUN cat package.json
RUN cat next.config.js || echo "next.config.js not found"

# Attempt to run the build
RUN npm run build

# If build succeeds, start the application
CMD ["npm", "start"]
