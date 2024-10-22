FROM node:18-alpine

WORKDIR /app

# Copy package.json first for better cache on subsequent builds
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app with verbose flag for more detailed output
RUN npm run build --verbose

# Start the app
CMD ["npm", "start"]
