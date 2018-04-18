const express = require('express')
const app = express()
const port = 8080

/* send this message for the broswer to display it at the place
 * of our html , css and js files. waiting for that lazy front 
 * end developer ;) 
 */
app.get('/', (request, response) => {
  response.send('Hello World!')
})

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

  console.log(`server is listening on ${port}`)
})