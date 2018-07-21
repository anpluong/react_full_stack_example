'user strict';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/jokes', (req, res) => {
  let foodJokes = [
    {
      id: 99991,
      joke: "When Chuck Norris was a baby, he didn't suck his mother's breast. His mother served him whiskey, straight out of the bottle."
    },
    {
      id: 99992,
      joke: 'When Chuck Norris makes a burrito, its main ingredient is real toes.'
    },
    {
      id: 99993,
      joke: 'Chuck Norris eats steak for every single meal. Most times he forgets to kill the cow.'
    },
    {
      id: 99994,
      joke: "Chuck Norris doesn't believe in ravioli. He stuffs a live turtle with beef and smothers it in pig's blood."
    },
    {
      id: 99995,
      joke: "Chuck Norris recently had the idea to sell his urine as a canned beverage. We know this beverage as Red Bull."
    },
    {
      id: 99996,
      joke: 'When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.'
    }
  ];
  // this method returns json format, this is to assist with mitigating certain types of persisten XSS attacks when clients sniff responses for HTML
  res.json(foodJokes);
});

app.listen(3333);

console.log('Listening on localhost:3333');