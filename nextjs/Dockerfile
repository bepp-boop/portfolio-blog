FROM node:18-alpine

WORKDIR /app

# Copy package.json first for better cache on subsequent builds
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Start the app
CMD ["npm", "start"]
