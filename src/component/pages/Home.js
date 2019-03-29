import React, { Component } from 'react';
import { TweenLite, Expo } from "gsap/all";
import './Pages.scss';


class Home extends Component {
	componentDidMount() {
		if (this.props.currentPage === 0) {
			setTimeout(() => {
				this._openAnimate();
			}, 100);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.currentPage !== 0) this._closeAnimate()
		else this._openAnimate()
	}

	_openAnimate = () => {
		this.a.className = "App_page_main open"
		TweenLite.to(this.animateBox, 1, {
			width: "1000px", ease: Expo.easeInOut, onComplete: () => {console.log("done")}
		}, );
	}

	_closeAnimate = () => {
		this.a.className = "App_page_main close"
		TweenLite.to(this.animateBox, 1, {
			width: 0, ease: Expo.easeInOut
		});
	}

	render() {
		return (
		<div className="App_page_main" ref={main => this.a = main}>
			<div className="wrap_content" ref={div => this.animateBox = div}>
				<h1 className="title">A platform for launching your <span>ICO</span> camplaign</h1>
				<p className="text">List your campaign, create a smart contract, raise funds or contribute to other startups right here.</p>
			</div>
		</div>
		);
	}
}

export default Home;