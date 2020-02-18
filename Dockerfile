# Stage 1 - the build process
FROM node:12.13 as build-deps
WORKDIR ./
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps ./build /usr/share/nginx/html
EXPOSE 8070
CMD ["nginx", "-g", "daemon off;"]