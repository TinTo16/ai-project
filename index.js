Sure! Here's a simple Express API that returns JSON data when requested with GET method in your terminal/command line using NodeJS (Express). 

Firstly install the necessary packages by running this command on Terminal or Command Prompt if you haven’t installed them yet. Open up two terminals and run these commands:
```sh
npm init -y # Initialize a new node project with NPM package manager, create "package.json" file automatically in your current directory 
npm install express --save   # Install Express framework for NodeJS to our application via npm (It will save it into the dependencies part of packages)
```   
Now let's write some code and run this API:
1st terminal - Start server with Nodemon. This can be used while debugging your app, which allows you to see changes immediately without having to restart or reload NodeJS runtime each time :  (To start the application use npm install nodemon --save-dev)   and run it by typing:
```sh   
npx nodemon server.js     # Starts a development session on port specified in your package json scripts if file changes are detected, app will reload automatically with live coding  (you can change the default script to any other command you want from 'start' or anything else).  
or npm start               # Run application using node server.js by running this as a normal NodeJS process - not in nodemon mode    . In real development, use "npx" instead of “npm” for the above commands to ensure that it uses NPM’s versions and works correctly on your machine  
```    
2nd terminal (client) : To test our API we can make requests from a client. Here're some examples using 'axios', which is popular HTTP request library in JavaScript:  use npm install axio to add it into the dependencies of this project or, if you prefer not to mess up with NPM packages for your specific purpose;
```sh   
npm i --save axios   # Install Axios as dependency. This can be used while making HTTP request from any part in our application (not just client).  In terminal use 'axios GET http://localhost:3001/users' to make an API call which you defined on server file and return the data
```    
Remember, this is a very basic setup. For more complex applications with database integration or other features such as middleware etc., then additional packages may be required for managing requests in ExpressJS application like body-parser(to handle JSON payloads), express validator (validate request parameters) and cors to enable CORS on your API endpoints, among others if needed.
