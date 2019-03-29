import React, { Component } from 'react';
import { TweenLite, CSSPlugin, ScrollToPlugin, Draggable, Expo } from "gsap/all";
import './Home.scss';


class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props.animate);
  }

  componentDidMount() {
    this.openAnimate();
  }

  openAnimate = () => {
    TweenLite.to(this.animateBox, 1, {
      width: "900px", ease: Expo.easeInOut
    });
  }

  closeAnimate = () => {
    TweenLite.to(this.animateBox, 1, {
      width: 0, ease: Expo.easeInOut
    });
  }

  render() {
    return (
      <div className="App-page-main">
        <div className="App-page-main-box" ref={div => this.animateBox = div}>
          <h1 className="title">Home Content</h1>
        </div>
      </div>
    );
  }
}

export default Home;