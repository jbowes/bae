# Start from the nodejs image tagged as alpine.
# alpine is a very small linux distribution.
FROM node:alpine

# Get our code in place
# You might notice this runs faster because there's a .dockerignore file
# blocking node_modules
COPY . /bae

# We'll do all our work while building in this directory
WORKDIR /bae

# Install the dependencies and pre-compile
# this is a single command to reduce docker layers. newer versions of docker
# can work around this with muilti-stage builds
RUN yarn && \
    yarn build

# bae uses http. inside our container we can use whatever port we want, so lets
# use the standard one!
EXPOSE 80

# We can set environment variables here, too. Use these as documentation, or for
# defaults.
#
# This one makes our node process listen on the port we expose.
ENV PORT 80

# This is what we'll run in a real container by default. this array form
# does a raw exec call, instead of using the shell (bash) to run it.
CMD ["yarn", "start"]
