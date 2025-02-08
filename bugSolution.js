const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // Simulate an asynchronous operation that might throw an error
      //throw new Error('Something went wrong!');
      res.send('Hello from Express!');
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});