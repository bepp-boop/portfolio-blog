# Use the official Node.js image as the base image
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package.json package-lock.json ./
# If you are using Yarn, uncomment the next line and comment the npm install line
# COPY yarn.lock ./
# RUN yarn install
RUN npm install  # Install dependencies

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build  # or yarn build

# Production image, copy all the files and run next
FROM node:18 AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Copy the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set the user to a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js server
CMD ["node", "server.js"]
