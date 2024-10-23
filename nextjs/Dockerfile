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

# Run build with verbose flag and redirect output
RUN npm run build --verbose > build_output.log 2>&1 || (cat build_output.log && exit 1)

# If build succeeds, print the log
RUN cat build_output.log

EXPOSE 3000

CMD ["npm", "start"]
