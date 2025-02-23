const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // Unhandled error
    //throw new Error('Something went wrong!'); 
    res.send('Hello from Express!');
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});