import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

import './App.scss';
import './component/pages/Pages.scss';
import Home from './component/pages/Home';
import Page1 from './component/pages/Page1';
import Page2 from './component/pages/Page2';
import NotFound from './component/pages/NotFound';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prevPage: null,
			currentPage: null,
			animateIng: false,
		};
	}
	componentDidMount = () => {
		this._checkPage();
	}
	
	_checkPage = () => {
		switch (window.location.hash) {
			case "#/":
			case "#/about":
				this.setState({currentPage: 0})
				break;
			
			case "#/loadmap":
				this.setState({currentPage: 1})
				break;

			case "#/trending":
				this.setState({currentPage: 2})
				break;
		
			default:
				this.setState({ currentPage: -1 })
				break;
		}
	}
	
	_changeCurrnetPage = (n) => {
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
			<Router>
				<div className="App">
					<nav className={(this.state.currentPage === 0) ?"color" : ""}>
						<ul>
							<li className="logo">logo</li>
							<li>{(!this.state.animateIng) ? <Link to="about" onClick={() => this._changeCurrnetPage(0)}>About</Link>: "About" }</li>
							<li>{(!this.state.animateIng) ? <Link to="loadmap" onClick={() => this._changeCurrnetPage(1)}>Loadmap</Link>: "Loadmap" }</li>
							<li>{(!this.state.animateIng) ? <Link to="trending" onClick={() => this._changeCurrnetPage(2)}>What's Trending</Link>: "What's Trending" }</li>
						</ul>
					</nav>
					{(this.state.animateIng && this.state.prevPage === 0) || this.state.currentPage === 0 ? <Home currentPage={this.state.currentPage} /> : null}
					{(this.state.animateIng && this.state.prevPage === 1) || this.state.currentPage === 1 ? <Page1 currentPage={this.state.currentPage} /> : null}
					{(this.state.animateIng && this.state.prevPage === 2) || this.state.currentPage === 2 ? <Page2 currentPage={this.state.currentPage} /> : null}
					{(this.state.currentPage === -1) ? <NotFound /> : null}
				</div>
			</Router>
		);
	}
}

export default App;