import React, { useState, useEffect } from "react";

const filterObj = {
  status: [
    {
      value: "Ongoing",
      name: "Ongoing",
    },
    {
      value: "Upcoming",
      name: "Upcoming",
    },
    {
      value: "Ended",
      name: "Ended",
    },
  ],
  tag: [
    {
      value: "all",
      name: "All",
    },
    {
      value: "bsc",
      name: "BSC Eco",
    },
    {
      value: "eth",
      name: "Ethereum Eco",
    },
  ],
};

const List = ({ listDom, _changePost, coinList, currentPostIndex, setStatus, status, setTag, tag }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(coinList);
  }, [coinList]);

  useEffect(() => {
    let tagName;
    if (tag === "bsc") tagName = "Binance Smart Chain";
    else if (tag === "eth") tagName = "Ethereum";

    if (tagName) {
      setList(coinList.filter(v => (v.crypto.contracts || []).filter(v => v.name === tagName).length));
    }
  }, [tag]);

  const clearFilter = () => {
	  setStatus("Ongoing")
	  setTag("all")
  }

  return (
    <div className="wrap_content_02" ref={listDom}>
      <div className="wrap_filter">
        <div className="filter_status">
          {filterObj.status.map((v, i) => (
            <button
              onClick={() => setStatus(v.value)}
              className={status === v.value ? "active" : ""}
              key={`status_${i}`}
            >
              {v.name}
            </button>
          ))}
        </div>
        <div className="filter_tag">
          {filterObj.tag.map((v, i) => (
            <button onClick={() => setTag(v.value)} className={tag === v.value ? "active" : ""} key={`tag_${i}`}>
              {v.name}
            </button>
          ))}
        </div>
      </div>
      {list.length && (
        <ul>
          {list.map((v, i) => {
            const className = currentPostIndex === i ? "active" : "";
            const index = i < 9 ? "0" + (i + 1) : i;
            return (
              <li
                // key={v.cryptoId}
                className={className}
                onClick={_changePost.bind(this, i)}
              >
                <p>
                  <span>{index}</span>
                  {v.crypto.name}
                </p>
              </li>
            );
          })}
        </ul>
      )}

      {!list.length && (
        <div className="null">
          <p>
            No upcoming projects for BSC Eco
            <br />
            Try adjusting your search by removing filters
          </p>
          <button onClick={clearFilter}>Clear Filters</button>
        </div>
      )}
    </div>
  );
};

export default List;
