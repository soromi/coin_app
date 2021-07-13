import React, { useEffect, useRef } from "react";

const Home = ({ currentPage }) => {
  const containerDom = useRef();

  const _openAnimate = () => {
    window.scrollTo(0, 0);
    containerDom.current.className = "App_page_main open";
  };

  const _closeAnimate = () => {
    containerDom.current.className = "App_page_main close";
  };

  useEffect(() => {
    if (currentPage === 0) _openAnimate();
    else _closeAnimate();
  }, [currentPage]);

  return (
    <div className="App_page_main" ref={containerDom}>
      <div className="wrap_content">
        <h1 className="title">
          A platform for launching your <span>ICO</span> camplaign
        </h1>
        <p className="text">
          List your campaign, create a smart contract, raise funds or contribute to other startups right here.
        </p>
      </div>
    </div>
  );
};

export default Home;
