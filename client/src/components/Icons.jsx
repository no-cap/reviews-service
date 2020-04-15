import React from "react";
import styled from 'styled-components';

const Icons = (props) => {

  const { friends, photos } = props.review;
  const reviews = Math.floor(Math.random() * 500)

  return (
    <div>
      <FriendsIcon friends={friends} />
      <ReviewsIcon reviews={reviews} />
      <PhotosIcon photos={photos} />
    </div>
  )
}

const IconDiv = styled.div`
  fill: #f15c00;
  text-align:left;
  display: block;
  margin-left: 6px;
  line-height: 80%;
`;


const TextSpan = styled.span`
  color: #333;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  position: relative;
  bottom: 4px;
  font-size: 12px;
  margin-left: 2px;
`;

const FriendsIcon = (props) => (
  <IconDiv>
    <span>
      <svg width="18" height="18" viewBox="0 0 18 18" className="icon_svg">
        <g>
          <path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
          <path d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" opacity=".502"></path>
        </g>
      </svg>
    </span>
    <TextSpan><b>{props.friends}</b> friends</TextSpan>
  </IconDiv>
)

const ReviewsIcon = (props) => (
  <IconDiv>
    <span>
      <svg width="18" height="18" viewBox="0 0 18 18" className="icon_svg">
        <path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z"></path>
      </svg>
    </span>
    <TextSpan><b>{props.reviews}</b> reviews</TextSpan>
  </IconDiv>
)



const PhotosIcon = (props) => (
  <IconDiv>
    <span>
      <svg width="18" height="18" viewBox="0 0 18 18" className="icon_svg">
        <path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
      </svg>
    </span>
    <TextSpan><b>{props.photos}</b> photos</TextSpan>
  </IconDiv>
)


export default Icons;