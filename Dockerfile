FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
