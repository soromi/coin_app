import React from 'react';

class Home extends React.Component {
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
		window.scrollTo(0, 0)
		this.main.className = "App_page_main open"
	}

	_closeAnimate = () => {
		this.main.className = "App_page_main close"
	}

	render() {
		return (
		<div className="App_page_main" ref={main => this.main = main}>
			<div className="wrap_content">
				<h1 className="title">A platform for launching your <span>ICO</span> camplaign</h1>
				<p className="text">List your campaign, create a smart contract, raise funds or contribute to other startups right here.</p>
			</div>
		</div>
		);
	}
}

export default Home;