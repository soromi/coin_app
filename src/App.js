import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { aniamteEnd} from './actions/simpleAction';

import './App.scss';
import Home from './component/pages/Home';
import Page1 from './component/pages/Page1';
import Page2 from './component/pages/Page2';

// const mapStateToProps = state => ({
// 	...state
// })

// const mapDispatchToProps = dispatch => ({
// 	aniamteEnd: () => dispatch(aniamteEnd()),
// })


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prevPage: null,
			currentPage: 2,
			animateIng: false,
		};
	}

	cc = (n) => {
		if ((this.state.currentPage === n ) || (this.state.animateIng)) return;
		this._page_move();
		this.setState((state, props) => { 
			return { 
				prevPage: this.state.currentPage,
				currentPage: n,
				animateIng: true,
			}
		}); 
	}

	_page_move = (n) => {
		setTimeout(() => {
			this.setState({
				prevPage: this.state.prevPage,
				currentPage: this.state.currentPage,
				animateIng: false 
			})
		}, 1000);
	}

	render() {
		return (
			<div className="App">
				<nav>
					<ul className="nav">
						<li className="logo">logo</li>
						<li onClick={() => {this.cc(0)}}>About</li>
						<li onClick={() => {this.cc(1)}}>Loadmap</li>
						<li onClick={() => {this.cc(2)}}>What's Trending</li>
					</ul>
				</nav>
				{(this.state.animateIng && this.state.prevPage === 0) || this.state.currentPage === 0 ? <Home currentPage={this.state.currentPage} /> : null }
				{(this.state.animateIng && this.state.prevPage === 1) || this.state.currentPage === 1 ? <Page1 currentPage={this.state.currentPage} /> : null}
				{(this.state.animateIng && this.state.prevPage === 2) || this.state.currentPage === 2 ? <Page2 currentPage={this.state.currentPage} /> : null}
			</div>
		);
	}
}

export default App;
// export default connect()(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
