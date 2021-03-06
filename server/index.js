const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const db = require('../database');
const port = 3003;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get(`/api/reviews`, (req, res) => {
  const id = req.query.businessId;
  console.log("handling the get request!", id);

  db.getAllReviewsByBusiness(id)
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    console.error(error);
  })
});

app.get('/loaderio-aeb7aec9413c5546efd48aeb79d430b0', (req, res) => {
  let response = 'loaderio-aeb7aec9413c5546efd48aeb79d430b0';
  return res.status(200).send(response);
})

app.listen(port, () => console.log(`listening on port ${port}!`));
