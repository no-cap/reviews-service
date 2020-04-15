import React from "react";
import $ from 'jquery';
import Star from "./Star.jsx";
import Form from "./Form.jsx";
import styled from 'styled-components';
import style from '../styles.css.jsx';


const Business = styled.span`
  border-top: 1px solid #e6e6e6;
  font-size: 14px;
  line-height: 1.28571em;
  color: #0073bb;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`;

const StarList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 10px;
  padding-left: 210px;
`;

const InputSection = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
  display: flex;
  box-sizing: border-box;
  vertical-align: center;
`;

const UserDiv = styled.div`
  width: 304px;
  margin: 18px;
  display: flex;
`;

const Inputbox = styled.div`
  text-align: center;
  vertical-align: top;
  width: 608px;
  margin-left: 6px;
  margin-bottom: 15px;
  background-color: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding-bottom: 12px;
`;

class SetRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hoverRating: 0,
      showForm: false,
      businessName: ''
    };
  }

  togglePop() {
    this.setState({showForm: !this.state.showForm});
  }

  handleRating(value) {
    this.setState({rating: value});
  }

  handleHoverRating(value) {
    this.setState({hoverRating: value});
  }

  componentDidMount() {
    // this.getReviews();
    this.getBusiness(this.props.business);
  }

  getBusiness(id) {
    $.ajax({
      method: 'GET',
      url: `/api/restaurant/${id}`,
      success: (content) => {this.setState({businessName: content})},
      error: (err) => (console.log('error from get request: ', err))
    })
  }

  render() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      // let styleClass = "star-rating-blank";
      let styleClass = style.starRatingBlank;
      if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 1 || this.state.hoverRating === 1)) {
        // styleClass = "star-rating-1"
        styleClass = style.starRating1;
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 2 || this.state.hoverRating === 2)) {
        // styleClass = "star-rating-2"
        styleClass = style.starRating2;
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 3 || this.state.hoverRating === 3)) {
        // styleClass = "star-rating-3"
        styleClass = style.starRating3;
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 4 || this.state.hoverRating === 4)) {
        // styleClass = "star-rating-4"
        styleClass = style.starRating4;
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 5 || this.state.hoverRating === 5)) {
        // styleClass = "star-rating-5"
        styleClass = style.starRating5;
      } 
      stars.push(
        <Star 
          key={i}
          styleClass={styleClass} 
          onClick={() => {
            this.handleRating(i + 1);
            this.togglePop();
          }} 
          onMouseEnter={() => {this.handleHoverRating(i + 1)}}
          onMouseLeave={() => {this.handleHoverRating(0)}}
        />
      )
    }

    return (
      <InputSection className="input column">
        <UserDiv className="user">
          <img src="https://s3-media0.fl.yelpcdn.com/assets/public/empty_profile.yelp-react-component-review.yji-1f2e356daa5c4d3f196e4da56d029152.png"/>
        </UserDiv>
        <Inputbox className="input-box">
          <StarList className="rating">
            {stars}
          </StarList>
          <Business className="business">Start your review of <strong>{this.state.businessName}</strong></Business>
        </Inputbox>
        {this.state.showForm ? 
          <Form business={this.props.business} rating={this.state.rating} togglePop={this.togglePop.bind(this)} handleNewReview={this.props.postReview}/> 
          : <div></div>}
      </InputSection>
    )
  }
}


export default SetRating;