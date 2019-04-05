import React from 'react';
import post from '../../data/post_data.json';

class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPost : null,
            currentPost : 0,
            animateIng : false,
            showList: false,
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
        window.scrollTo(0, 0)
        this.main.className = "App_page_2 open"
    }

    _closeAnimate = () => {
        this.main.className = "App_page_2 close"
    }

    _changePost = (n) => {
        if ((this.state.currentPost === n) || (this.state.animateIng)) return;
        this.content.className = "wrap_content_01 next"
        this.setState({
            ...this.state,
            animateIng: true,
        })

        setTimeout(() => {
            this.content.className = "wrap_content_01 end"
            this.setState({
                ...this.state,
                prevPost: this.state.currentPost,
                currentPost: n,
                animateIng: false,
            })
        }, 500);
    }

    _nextPost = () => {
        if (this.state.currentPost === post.length - 1) return
        this._changePost(this.state.currentPost + 1)
    }

    _prevPost = () => {
        if (this.state.currentPost === 0) return
        this._changePost(this.state.currentPost - 1)
    }

    _showList = () => {
        if (this.state.animateIng) return;
        if (!this.state.showList) this.list.className = "wrap_content_02 show"
        else this.list.className = "wrap_content_02 hide"

        this.setState({
            ...this.state,
            showList: !this.state.showList,
            animateIng: true,
        })

        setTimeout(() => {
            this.content.className = "wrap_content_01 end"
            this.setState({
                ...this.state,
                animateIng: false,
            })
        }, 500);
    }

    render() {
		return (
            <div className="App_page_2 close" ref={main => this.main = main}>
                <div className="wrap_content_01" ref={content => this.content = content}>
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

                        <div className="wrap_post_btn">
                            <button className={`prev_btn ${(this.state.currentPost === 0) ? "lock" : ""}`} onClick={() => { this._prevPost() }}>prev</button>
                            <button className={`next_btn ${(this.state.currentPost === post.length - 1) ? "lock" : ""}`} onClick={() => { this._nextPost() }}>next</button>
                            <button className="show_list_btn" onClick={() => { this._showList() }}>show list</button>
                        </div>
                    </div>
                </div>

                <div className="wrap_content_02" ref={list => this.list = list}>
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