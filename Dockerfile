FROM node:21-alpine  

WORKDIR /app

COPY package*.json ./
RUN npm install  # Install dependencies

COPY . .

EXPOSE 3000  

CMD ["yarn", "run", "dev"]  # Start development server
