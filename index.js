Sure! Here is a simple Express API setup using NodeJS for the HTTP requests (GET/POST). 

```javascript
const express = require('express'); // Importing built-in module of nodejs to use http connections with server side events such as routing etc. in our application will be handled by this, which can also manage static files and serve up all content on a specified folder at the same time via middleware like bodyparser
const app = express(); 
app.use(express.json()) // This is for parsing incoming requests with JSON payloads (like POST/PUT HTTP request) in Express based Applications, can also be used if you are sending or receiving data as a form-data type and not json contenttype like 'application/x-www-form-urlencoded'
app.use(express.static('public')) // Serve static files from the public folder (only supporting GET requests) to provide frontend interface with express app — for instance, index.html or client side scripts in a production environment which serve as backends and can handle HTTP/HTTPS Requests & Responses
app.listen(3001); // To start the server we will call listen method on our application object where it listens to requests at ‘http://localhost:3002’, you may change port number if required by your system settings and environment variables or any other configurations provided in setup process
```  
The above code creates a basic Express API. The `app` variable is an instance of the express app which we then start using it to listen on specified ports (in this case 3001 for testing). This will work as follows: when you send HTTP requests, they are processed by your routes defined in '/routes' or 'controllers'.
