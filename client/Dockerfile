FROM node:12

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# set working directory
WORKDIR /client

# install and cache app dependencies
COPY . /client/

RUN npm install

# Bundle app source
COPY . .

# Build react app
# RUN npm run build
RUN if [ "$NODE_ENV" = "production" ]; \
	then npm run build;  \
	fi

# Specify port and serve the build file
# CMD ["serve", "-p", "3000", "-s", "build"]
RUN if [ "$NODE_ENV" = "production" ]; \
	then serve -p 3000 -s build;  \
	else npm start; \
	fi
