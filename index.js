// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port,() => console.log(`Example app listening on port ${port}!`))

var request = require("request");

var options = { method: 'GET',
  url: 'https://api-uat.unionbankph.com/partners/sb/locators/v1/atms',
  headers: 
   { 'Postman-Token': 'c4d56e0c-5a4b-48a9-a273-813dc58573ea',
     'cache-control': 'no-cache',
     'x-ibm-client-secret': 'N0yE7sB7nT3kW0yL2wW8iN0rL6qF5qD7mJ8bK6oS5jW1eS3xH0',
     'x-ibm-client-id': 'f9be1df2-c541-4dd8-8bb9-1f6ac5f3d028',
     'content-type': 'application/json',
     accept: 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
