FROM node:12

# set working directory
# WORKDIR /server
RUN if [ "$NODE_ENV" = "production" ]; \
	then echo PROD;  \
  else echo DEV; \
	fi
# # install and cache app dependencies
# COPY . /server/

# RUN npm install

# # Bundle app source
# COPY . .

# RUN if [ "$NODE_ENV" = "production" ]; \
# 	then npm start;  \
#   else npm run dev; \
# 	fi
