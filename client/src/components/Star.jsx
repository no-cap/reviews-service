import React from "react";


const Star = (props) => {
  
  return (
    <li className={props.styleClass} style={props.styleClass} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick} >
      <svg viewBox="0 0 160 160" width="34px" height="34px">  
        <path d="M110.6 0h-76.9c-18.6 0-33.7 15.1-33.7 33.7v76.9c0 18.6 15.1 33.7 33.7 33.7h76.9c18.6 0 33.7-15.1 33.7-33.7v-76.9c0-18.6-15.1-33.7-33.7-33.7z"/>
        <path d="M33.3,0.3C14.7,0.3-0.4,15.4-0.4,34V111c0,18.6,15.1,33.7,33.7,33.7h38.3V0.3H33.3z"/>
        <path fill="#fff" d="M72 19.3l13.6 35.4 37.9 2-29.5 23.9 9.8 36.6-31.8-20.6-31.8 20.6 9.8-36.6-29.5-23.9 37.9-2z"/>
      </svg>
    </li>

  )
}


export default Star;