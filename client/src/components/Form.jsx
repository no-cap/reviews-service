import React from "react";
import styled from 'styled-components';

export const PostButton = styled.input`
  color: #fff;
  background: #d32323;
  border: 1px solid #d32323;
  border-radius: 3px;
  padding: 10px 13px;
  font-size: 16px;
  line-height: 1.3125em;
  display: inline-block;
  vertical-align: middle;
  margin-top: 24px;
  cursor: pointer;
  font-weight: 700;
  text-align: center;
`;

const Textarea = styled.textarea`
  height: 175px;
  font-size: 18px;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  line-height: 1.44em;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0;
  resize: none;
  width: 100%;
  min-height: 258px;
  font-weight: 400;
`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  background-color: white;
  position: absolute;
  top: 20%;
  left: 25%;
  width: 50%;
  padding: 24px;
  border-radius: 3px;
  border: 1px solid #ccc;
  cursor: text;
  max-width: 600px;
`;

const Close = styled.span`
  color: Black;
  float: right;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }
  }

  handleClick() {
    this.props.togglePop();
  }

  handleChange(e) {
    this.setState({comment: e.target.value});
  }

  handlePost() {
    console.log('calling handlePost from Form component')
    const faker = require('faker');
    let date = new Date();
    let review = {
      rating: this.props.rating,
      comment: this.state.comment,
      username: faker.internet.userName(),
      date: date.toLocaleDateString(),
      usercity: faker.fake('{{address.city}}, {{address.state}}'),
      avatar: faker.image.avatar(),
      restaurant_id: this.props.business
    }
    this.props.handleNewReview(review);
    this.props.togglePop();
  }

  render() {
    return (
      <Modal className="modal">
        <ModalContent className="modal_content">
          <Close className="close" onClick={this.handleClick.bind(this)}>&times;</Close>
          <form>
            <Textarea placeholder="Add some comments..." onChange={this.handleChange.bind(this)}></Textarea>
            <br />
            <PostButton className="post-button" type="button" value="Post Review" onClick={this.handlePost.bind(this)}/>
          </form>
        </ModalContent>
      </Modal>
    )
  }
}
  
export default Form;