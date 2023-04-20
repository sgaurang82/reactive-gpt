FROM node:14-alpine

WORKDIR /usr/app

# Install some depenendencies
COPY ./ ./
RUN npm install

EXPOSE 8080

# Default command
CMD ["npm", "start"]
