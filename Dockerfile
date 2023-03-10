FROM node:18-alpine
WORKDIR /app
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
