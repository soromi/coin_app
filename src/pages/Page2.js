import React, { useState, useEffect, useRef } from "react";
import useCoinList from "../hooks/useCoinList";
import List from "../component/ICO/List";

const Page2 = ({ currentPage }) => {
  const { coinList, coinDetail, getCoinList, getCoinDetail } = useCoinList();
  const containerDom = useRef();
  const contentDom = useRef();
  const listDom = useRef();

  const [status, setStatus] = useState("Ongoing");
  const [tag, setTag] = useState("all");
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [animateIng, setAnimateIng] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    getCoinList({ status, tag });
    setTag("all");
    setCurrentPostIndex(0);
  }, [status]);

  useEffect(() => {
    if (coinList.length === 0) return;
    getCoinDetail(currentPostIndex);
  }, [currentPostIndex]);

  const _openAnimate = () => {
    window.scrollTo(0, 0);
    containerDom.current.className = "App_page_2 open";
  };

  const _closeAnimate = () => {
    containerDom.current.className = "App_page_2 close";
  };

  const _changePost = n => {
    if (currentPostIndex === n || animateIng) return;
    contentDom.current.className = "wrap_content_01 next";
    setAnimateIng(true);
    setTimeout(() => {
      contentDom.current.className = "wrap_content_01 end";
      setCurrentPostIndex(n);
      setAnimateIng(false);
    }, 500);
  };

  const _nextPost = () => {
    if (currentPostIndex === coinList.length - 1) return;
    _changePost(currentPostIndex + 1);
  };

  const _prevPost = () => {
    if (currentPostIndex === 0) return;
    _changePost(currentPostIndex - 1);
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

  const getBaseText = arr => {
    let textArr = [];
    if (arr.filter(v => v.name.includes("Ethereum")).length) textArr.push("Ethereum");
    if (arr.filter(v => v.name.includes("Binance Smart Chain")).length) textArr.push("BSC");
    if (textArr.length) return `Base - ${String(textArr)}`;
  };

  useEffect(() => {
    if (currentPage === 2) _openAnimate();
    else _closeAnimate();
  }, [currentPage]);

  return (
    <div className="App_page_2" ref={containerDom}>
      <div className="wrap_content_01" ref={contentDom}>
        {coinList[currentPostIndex] && coinDetail.ico && (
          <div className="preview">
            <div className="wrap_title">
              <div
                className="icon"
                style={{ background: `url(${coinList[currentPostIndex].crypto.logo || ""})` }}
              ></div>
              <h2 className="title">{coinList[currentPostIndex].crypto.name}</h2>
              {coinList[currentPostIndex].crypto.contracts && (
                <h3 className="sub_title">{getBaseText(coinList[currentPostIndex].crypto.contracts)}</h3>
              )}
            </div>
            <div className="wrap_text">
              <p className="sub_text">
                ICO - <span>${coinDetail.ico.stages[0].icoPriceUsd}</span> / GOAL -{" "}
                <span>
                  $
                  {coinDetail.ico.stages[0].fundraisingGoalUsd
                    ? Number(coinDetail.ico.stages[0].fundraisingGoalUsd).toLocaleString()
                    : "---"}
                </span>
              </p>
              <p className="text">{coinDetail.description}</p>
            </div>
            <a
              className="go_btn"
              href={coinDetail.ico && coinDetail.ico.stages[0].whereToBuyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchaes Now
            </a>

            <div className="wrap_post_btn">
              <button className={`prev_btn ${currentPostIndex === 0 ? "lock" : ""}`} onClick={_prevPost}>
                prev
              </button>
              <button
                className={`next_btn ${currentPostIndex === coinList.length - 1 ? "lock" : ""}`}
                onClick={_nextPost}
              >
                next
              </button>
              <button className="show_list_btn" onClick={_showList}>
                show list
              </button>
            </div>
          </div>
        )}
      </div>

      <List
        listDom={listDom}
        _changePost={_changePost}
        coinList={coinList}
        currentPostIndex={currentPostIndex}
        setStatus={setStatus}
        status={status}
        setTag={setTag}
        tag={tag}
      />
    </div>
  );
};

export default Page2;
