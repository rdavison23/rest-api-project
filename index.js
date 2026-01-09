import express from 'express';
import BOOKS from './books.js';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`serveris lisening on port ${port}`);
});

app.get('/books', (req, res) => {
  let response = [];

  for (const book of BOOKS) {
    const queryKeys = Object.keys(req.query);

    //if no query params return all books
    // if (queryKeys.length === 0) {
    //   response.push(book);
    //   continue;
    // }
    // Checks if every query key matches the book
    const matchesAll = queryKeys.every((key) => {
      return book[key] === req.query[key];
    });

    if (matchesAll) {
      response.push(book);
    }
  }
  res.json(response);
});
