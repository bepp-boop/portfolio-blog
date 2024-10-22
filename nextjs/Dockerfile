FROM node:18-alpine

WORKDIR /app

# Print Node.js and npm versions
RUN node -v && npm -v

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# List installed packages
RUN npm list

# Copy the rest of the application
COPY . .

# List files
RUN ls -la

# Print contents of crucial files
RUN cat package.json
RUN cat next.config.js || echo "next.config.js not found"

# Attempt to run the build with more verbose output
RUN npm run build --verbose

CMD ["npm", "start"]
