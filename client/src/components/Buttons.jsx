/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import style from '../styles.css.jsx';


class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useful: false,
      funny: false,
      cool: false,
    };
  }

  handleUsefulClick() {
    this.setState({ useful: !this.state.useful });
    console.log('this is the style blank: ', style.tagBlank);
  }

  handleFunnyClick() {
    this.setState({ funny: !this.state.funny });
  }

  handleCoolClick() {
    this.setState({ cool: !this.state.cool });
  }

  render() {
    // let styleUseful = 'tag-blank';
    let styleUseful = style.tagBlank;
    // let styleFunny = 'tag-blank';
    let styleFunny = style.tagBlank;
    // let styleCool = 'tag-blank';
    let styleCool = style.tagBlank;
    if (this.state.useful) {
      styleUseful = style.tagFilled;
    }
    if (this.state.funny) {
      styleFunny = style.tagFilled;
    }
    if (this.state.cool) {
      styleCool = style.tagFilled;
    }

    return (
      <div>
        <span><Useful styleUseful={styleUseful} onClick={this.handleUsefulClick.bind(this)} /></span>
        <span><Funny styleFunny={styleFunny} onClick={this.handleFunnyClick.bind(this)} /></span>
        <span><Cool styleCool={styleCool} onClick={this.handleCoolClick.bind(this)} /></span>
      </div>
    );
  }
}

const Useful = (props) => (
  <button className={props.styleUseful} style={props.styleUseful} onClick={props.onClick}>
    <span>
      <svg viewBox="0 0 24 24" width="24px" height="24px">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2-5.5a2 2 0 0 0 4 0V16h-4v.5zm2-10.833a4.278 4.278 0 0 0-4.278 4.278c0 1.635.93 3.04 2.278 3.76V15h4v-1.296c1.35-.72 2.278-2.124 2.278-3.76A4.278 4.278 0 0 0 12 5.668zM11 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    </span>
    <span>Useful</span>
  </button>
);

const Funny = (props) => (
  <button className={props.styleFunny} style={props.styleFunny} onClick={props.onClick}>
    <span>
      <svg viewBox="0 0 24 24" width="24px" height="24px">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 18a5.5 5.5 0 0 1-5.288-4h10.576A5.5 5.5 0 0 1 12 18z" />
      </svg>
    </span>
    <span>Funny</span>
  </button>
);

const Cool = (props) => (
  <button className={props.styleCool} style={props.styleCool} onClick={props.onClick}>
    <span>
      <svg viewBox="0 0 24 24" width="24px" height="24px">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16.5a5.405 5.405 0 0 1-5-3.357 8.6 8.6 0 0 0 5 1.6 8.6 8.6 0 0 0 5-1.6 5.405 5.405 0 0 1-5 3.357zm3.96-5.5h-.002c-1.617 0-3.028-.9-3.67-2.224a.32.32 0 0 0-.575 0C11.07 12.1 9.66 13 8.043 13H8.04c-2.01 0-3.74-1.15-4.035-3.018l-.124-.734c-.07-.305.257-.25.634-.248h14.972c.39 0 .673-.04.632.248l-.124.517C19.647 11.612 17.97 13 15.96 13z" />
      </svg>
    </span>
    <span>Cool</span>
  </button>
);


export default Buttons;
