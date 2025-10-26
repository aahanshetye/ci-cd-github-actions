FROM node:22-alpine
WORKDIR /app
# copy lockfiles first for better layer caching
COPY package.json package-lock.json* ./
RUN npm ci
# then app code
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
