import React, { Component } from 'react';
import { TweenLite, Expo } from "gsap/all";
import post from '../../data/post_data.json';
import './Pages.scss';

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPost : null,
            currentPost : 0,
            animateIng : false,
        };
    }

    componentDidMount() {
        if (this.props.currentPage === 2) this._openAnimate();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentPage !== 2) this._closeAnimate()
        else this._openAnimate()
    }

    _openAnimate = () => {
        this.a.className = "App_page_2 open"
        TweenLite.to(this.animateBox, 1, {
            width: "500px", 
            ease: Expo.easeInOut, 
            onComplete: () => { console.log("done"); }
        }, );
    }

    _closeAnimate = () => {
        this.a.className = "App_page_2 close"
        TweenLite.to(this.animateBox, 1, {
            width: 0, 
            ease: Expo.easeInOut,
        });
    }

    _changePost = (n) => {
        if ((this.state.currentPost === n) || (this.state.animateIng)) return;
        this.b.className = "wrap_content_01 next"
        this.setState({
            ...this.state,
            animateIng: true,
        })

        setTimeout(() => {
            this.b.className = "wrap_content_01 end"
            this.setState({
                prevPost: this.state.currentPost,
                currentPost: n,
                animateIng: false,
            })

        }, 500);
    }

    render() {
		return (
            <div className="App_page_2 close" ref={main => this.a = main}>
                <div className="wrap_content_01" ref={content => this.b = content}>
                    {(this.state.prevPost === null) ? <h1 className="main_title">See what's Trending</h1> : null }
                    <div className="preview">
                        <div className="wrap_title">
                            <div className="icon"></div>
                            <h2 className="title">{post[this.state.currentPost].title}</h2>
                            <h3 className="sub_title">Base - Ethereum</h3>
                        </div>
                        <div className="wrap_text">
                            <p className="sub_text">ICO - <span>600,00,00 CS</span> of <span>1,000,000,000</span></p>
                            <p className="text">{post[this.state.currentPost].text}</p>
                        </div>
                        <button className="go_btn">Purchaes Now</button>
                    </div>
                </div>

                <div className="wrap_content_02" ref={div => this.animateBox = div}>
                    <ul>
                        {post.map((value, i) => {
                            let className = (this.state.currentPost === i ? "active" : "");
                            let index = (i < 9 ? "0" + (i + 1) : i)
                            return (<li key={i} className={className} onClick={this._changePost.bind(this, i)}><p><span>{index}</span>{value.title}</p></li>)
                        })}
                    </ul>
				</div>
			</div>
        );
    }
}

export default Page2;
// export default connect(mapStateToProps, mapDispatchToProps)(Page2);
