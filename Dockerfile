FROM node:21-alpine  

WORKDIR /app

COPY package*.json /app
COPY . /app
RUN npm install  # Install dependencies


EXPOSE 3000  

CMD ["yarn", "run", "dev"]  # Start development server
