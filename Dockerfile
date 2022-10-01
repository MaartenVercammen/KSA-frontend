FROM node
#By default create-react-app sets port to 3000 when you start react app, but I configured to run ui on 8080 (just personal preference) instead of 3000.
EXPOSE 8001 
RUN mkdir -p /app/public /app/src
WORKDIR /app
COPY tsconfig.json /app/tsconfig.json
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY . /app
## install only the packages defined in the package-lock.json (faster than the normal npm install)
RUN npm install
# Run 'npm run dev' when the container starts.
CMD ["npm", "run", "start"]