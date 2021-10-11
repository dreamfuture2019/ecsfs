const express = require('express')
const request = require('request')

const app = express()
const port = 3000

app.get('/', (req, res) => {

  console.log('get response from server');
  console.log(req);
  // The frontend greets with the following:
  const message = "Hello from the frontend..."

  // The backend should greet us with "Hello from the backend."
  request('http://ecsfs-backend-service.ecsfs:5000', (err, response, body) => {
    // We send both greetings together on a GET request to /
   
    res.send(message + " " + body + " " + err + " " + response);
  });
})

app.get('/health-check', (req, res) => {
   
    res.send("OK");
});

app.listen(port, () => console.log(`Fontend app listening on port ${port}.`))
