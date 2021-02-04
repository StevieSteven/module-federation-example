# module federation example
This repository provides a frontend microservice example using webpack 5 module federation.

## setup: 

install yarn running `npm install -g yarn`

install concurrently running `npm install -g concurrently`

run `npm run installProjects` to install dependencies

run `npm start` to start all applications 

## applications

### portal application 
Portal application embed all micro frontends.

Url: http://localhost:5000

### angular project module
Simple angular project.

Url: http://localhost:5002

### react15 assets module
Simple react module with react 15.

Url: http://localhost:5003

### react15 assets module
Module with react 17.
Gets dummy data from own backend.

Url: http://localhost:5001

## special thanks:

The project builds on
https://github.com/manfredsteyer/module-federation-with-angular-dynamic/tree/master/projects

Special thanks to Manfred Steyer for the great example
