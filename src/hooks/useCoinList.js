import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action as coinAction } from "../modules/coin";

const useCoinList = () => {
  const dispatch = useDispatch();
  const coinListOrigin = useSelector(state => state.coin.list); // original
  const coinDetail = useSelector(state => state.coin.detail);
  const [coinList, setCoinList] = useState([]); // filtering for output

  useEffect(() => {
    coinList.length > 0 && getCoinDetail(0);
  }, [coinList]);

  useEffect(() => {
    setCoinList(coinListOrigin);
  }, [coinListOrigin]);

  const getCoinList = ({ status, tag }) => {
    dispatch(coinAction.getCoinList({ status, tag }));
  };

  const setFilter = tag => {
    if (tag === "all") setCoinList(coinListOrigin);
    else {
      let tagName;
      if (tag === "bsc") tagName = "Binance Smart Chain";
      else if (tag === "eth") tagName = "Ethereum";
      tagName &&
        setCoinList(coinListOrigin.filter(v => (v.crypto.contracts || []).filter(v => v.name === tagName).length));
    }
  };

  const getCoinDetail = i => {
    if (coinList.length === 0) return;
    const slug = coinList[i].crypto.slug;
    dispatch(coinAction.getCoinDetail({ slug: slug }));
  };

  return {
    coinList,
    coinDetail,
    getCoinList,
    getCoinDetail,
    setFilter,
  };
};

export default useCoinList;
