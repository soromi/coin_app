import React, { Component } from 'react';
import './Pages.scss';

class Page1 extends React.Component {
    componentDidMount() {
        if (this.props.currentPage === 1) this._openAnimate();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentPage !== 1) this._closeAnimate()
        else this._openAnimate()
    }


    _openAnimate = () => {
        this.a.className = "App_page_1 open"

    }

    _closeAnimate = () => {
        this.a.className = "App_page_1 close"

    }

    render() {
        return (
            <div className="App_page_1 close" ref={main => this.a = main}>
                <div className="wrap_content">
                    <h1 className="main_title">Token Distribution</h1>
                    <div className="wrap_text">
                        <ul>
                            <li>
                                <p className="sub_title"><span>92M</span> Token</p>
                                <p>In Total.</p>
                            </li>

                            <li>
                                <p className="sub_title"><span>12M</span> Token</p>
                                <p>Issued at the ICO.</p>
                            </li>

                            <li>
                                <p className="sub_title"><span>Token Bonus</span> by Quant</p>
                                <p>Bigger transactions get more tokens.</p>
                            </li>

                            <li>
                                <p className="sub_title"><span>16/9/2018</span></p>
                                <p>The starting date of the ICO.</p>
                            </li>

                            <li>
                                <p className="sub_title"><span>$12.03</span> / Token</p>
                                <p>starting price for the first day.</p>
                            </li>

                            <li>
                                <div className="graph">
                                    <span style={{ height: "39%" }}>39</span>
                                    <span style={{ height: "72%" }}>72</span>
                                    <span style={{ height: "33%" }}>33</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;