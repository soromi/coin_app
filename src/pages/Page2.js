import React, { useState, useEffect, useRef } from "react";
import post from "../data/post_data.json";

const Page2 = ({ currentPage }) => {
  const containerDom = useRef();
  const contentDom = useRef();
  const listDom = useRef();

  const [prevPost, setPrevPost] = useState(null);
  const [currentPost, setCurrentPost] = useState(0);
  const [animateIng, setAnimateIng] = useState(false);
  const [showList, setShowList] = useState(false);

  const _openAnimate = () => {
    window.scrollTo(0, 0);
    containerDom.current.className = "App_page_2 open";
  };

  const _closeAnimate = () => {
    containerDom.current.className = "App_page_2 close";
  };

  const _changePost = n => {
    if (currentPost === n || animateIng) return;
    contentDom.current.className = "wrap_content_01 next";
    setAnimateIng(true);
    setTimeout(() => {
      contentDom.current.className = "wrap_content_01 end";
      setPrevPost(currentPost);
      setCurrentPost(n);
      setAnimateIng(false);
    }, 500);
  };

  const _nextPost = () => {
    if (currentPost === post.length - 1) return;
    _changePost(currentPost + 1);
  };

  const _prevPost = () => {
    if (currentPost === 0) return;
    _changePost(currentPost - 1);
  };

  const _showList = () => {
    if (animateIng) return;
    if (!showList) listDom.current.className = "wrap_content_02 show";
    else listDom.current.className = "wrap_content_02 hide";

    setShowList(!showList);
    setAnimateIng(true);
    setTimeout(() => {
      contentDom.current.className = "wrap_content_01 end";
      setAnimateIng(false);
    }, 500);
  };

  useEffect(() => {
    if (currentPage === 2) _openAnimate();
    else _closeAnimate();
  }, [currentPage]);

  return (
    <div className="App_page_2 close" ref={containerDom}>
      <div className="wrap_content_01" ref={contentDom}>
        {prevPost === null ? <h1 className="main_title">See what's Trending</h1> : null}
        <div className="preview">
          <div className="wrap_title">
            <div className="icon"></div>
            <h2 className="title">{post[currentPost].title}</h2>
            <h3 className="sub_title">Base - Ethereum</h3>
          </div>
          <div className="wrap_text">
            <p className="sub_text">
              ICO - <span>600,00,00 CS</span> of <span>1,000,000,000</span>
            </p>
            <p className="text">{post[currentPost].text}</p>
          </div>
          <button className="go_btn">Purchaes Now</button>

          <div className="wrap_post_btn">
            <button className={`prev_btn ${currentPost === 0 ? "lock" : ""}`} onClick={_prevPost}>
              prev
            </button>
            <button className={`next_btn ${currentPost === post.length - 1 ? "lock" : ""}`} onClick={_nextPost}>
              next
            </button>
            <button className="show_list_btn" onClick={_showList}>
              show list
            </button>
          </div>
        </div>
      </div>

      <div className="wrap_content_02" ref={listDom}>
        <ul>
          {post.map((value, i) => {
            const className = currentPost === i ? "active" : "";
            const index = i < 9 ? "0" + (i + 1) : i;
            return (
              <li key={i} className={className} onClick={_changePost.bind(this, i)}>
                <p>
                  <span>{index}</span>
                  {value.title}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Page2;
