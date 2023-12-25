FROM node:21-alpine  

WORKDIR /

COPY package*.json /
COPY . .
RUN npm install  # Install dependencies


EXPOSE 3000  

CMD ["yarn", "run", "dev"]  # Start development server
