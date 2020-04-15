import React from "react";
import ReviewList from './ReviewList.jsx'
import axios from 'axios';
import SetRating from './SetRating.jsx';
import styled from 'styled-components';

// import Header from '../styles.jsx';


const Header = styled.h3`
  margin-bottom: 12px;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 16px;
  margin-left: 20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: Math.floor(Math.random() * 10000000),
      reviews: []
    }

    this.getReviewsByBusiness = this.getReviewsByBusiness.bind(this);
  }
  
  componentDidMount() {
    const { business } = this.state;
    this.getReviewsByBusiness(business);
  }


  getReviewsByBusiness(id) {
    axios.get('/api/reviews', {
      params: {
        businessId: id
      }
    })
    .then(response => {
      console.log(response.data.rows)
      this.setState({
        reviews: response.data.rows
      })
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }

  render() {
    return (
      <div>
        <Header>Recommended Reviews</Header>
        <SetRating restaurant={this.state.business} />
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
};

export default App;