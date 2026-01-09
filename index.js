import express from 'express';
import BOOKS from './books.js';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`serveris lisening on port ${port}`);
});

app.get('/books', (req, res) => {
  console.log(req.query);
  // res.json(BOOKS);
  let response = [];

  for (const book of BOOKS) {
    // response.push(book);
    // no query than push(book)
    // else
    // if we have a format === book.format push(format)
    if (Object.keys(req.query).length === 0) {
      response.push(book);
    } else {
      if (req.query['format'] === book['format']) {
        response.push(book);
      }
    }
  }
  res.json(response);
});
