const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

//send this login html file for the browser to display it.
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/login.html'))
});

//send the public folder to broswer but with name static
app.use('/static', express.static(path.join(__dirname, 'public')));

/* initialize a server which listen on the port 8080 and in case 
 * of error handle it by displaying a message in the console which
 * says that something went expected or else display the message
 * " server is listening on ${port} ".Since port = 8080 so the real
 * message on the console will be "server is listening on 8080" 
 */
app.listen(port, (err) => {
  if (err) {
    return console.log('something went expected', err)
  }



  console.log(`server is listening on ${port}. \ntry to open this link http://localhost:8080 in your browser`)
});
