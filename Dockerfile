FROM node:16.13.2

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ENV context ""
ENV port 4005

# install app dependencies
COPY package.json ./

RUN chmod -R 775 /app
RUN chown -R node:node /app
USER node

RUN npm install

# add app
COPY . ./


# start app
CMD ["npm","start"]
