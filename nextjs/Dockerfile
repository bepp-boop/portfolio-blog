FROM node:18-alpine

WORKDIR /app

# Print Node.js and npm versions
RUN node -v && npm -v

COPY package*.json ./
RUN npm install

COPY . .

# List contents of the directory
RUN ls -la

# Print package.json content
RUN cat package.json

# Run build with verbose flag
RUN npm run build --verbose

EXPOSE 3000

CMD ["npm", "start"]
