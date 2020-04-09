const express = require('express')
const app = express();
const db = require('../database/models.js')
const bodyParser = require('body-parser');
const port = 3003


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/reviews', (req, res) => {
  console.log("handling the get request!", req.body)
  // console.log(db.getRecentReviews)
  db.getRecentReviews((err, reviews) => {
    if (err) {
      console.log('error calling db.getRecentReviews')
    } else {
      res.send(reviews);
    }
  })
  
});

app.get('/api/restaurant/:id', (req, res) => {
  console.log("handling the get request for restaurant name!", req.params)
  // console.log(db.getRecentReviews)
  db.getRestaurantName(req.params.id,  (err, result) => {
    if (err) {
      console.log('error calling db.getRecentReviews')
    } else {
      console.log(result);
      res.send(result[0].name);
    }
  })
  
});

app.get('/api/restaurants/:id/reviews', (req, res) => {
  console.log('handleing get request for reviews by restaurant', req.params)
  db.getReviewsByRestaurant(req.params.id, (err, reviews) => {
    if (err) {
      console.log('error calling db.getReviewsByRestaurant')
      res.status(401).send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

app.post('/api/restaurants/:id/newreview', (req, res) => {
  console.log('handleing post request for new review by restaurant', req.body)
  let review = req.body;
  db.insertReview(review, (err) => {
    if (err) {
      console.log('error calling db.getReviewsByRestaurant')
      res.status(401).send(err);
    } else {
      console.log('insert review successfully!')
      res.status(200).end();
    }
  });
})

app.listen(port, () => console.log(`listening on port ${port}!`));
