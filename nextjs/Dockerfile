FROM node:18-alpine

WORKDIR /app

# Copy package.json first for better cache on subsequent builds
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Add error handling and verbose output
RUN set -ex && npm run build

# Start the app
CMD ["npm", "start"]
