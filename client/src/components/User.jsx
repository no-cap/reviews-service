import React from "react";
import styled from 'styled-components';
import Icons from './Icons.jsx'

const Useravatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 4px;
`;
  
const Username = styled.div`
  display: block;
  color: #0073bb;
  text-align: left;
  font-weight: 700;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.28571em;
  margin-left: 6px;
`;

const Usercity = styled.div`
  display: block;
  color: #333;
  text-align:left;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5em;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  margin-left: 6px;
`;

const UserContainer = styled.div`
  width: 304px;
  margin: 18px;
  display: flex;
`;


const User = (props) => {
  return (
    <UserContainer className="user">
      <Useravatar className="useravatar" src={props.review.avatar}/>
      <div>
        <Username className="username">{props.review.username}</Username>
        <Usercity className="usercity">{props.review.usercity}</Usercity>
        <Icons review={props.review} />
      </div>
    </UserContainer>
  )
}

export default User;


