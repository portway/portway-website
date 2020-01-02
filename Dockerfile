FROM nginx:alpine

# Set working directory
WORKDIR /var/www

# Only copy package.json first to take advantage of docker caching
COPY package*.json ./

RUN npm install

# Copy existing application directory contents
COPY . .

RUN npm run build
RUN rm -rf node_modules/
RUN rm -rf src/
RUN rm -rf nginx/

RUN npm install --only=production
