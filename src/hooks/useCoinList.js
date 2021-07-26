import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action as coinAction } from "../modules/coin";

const useCoinList = () => {
  const dispatch = useDispatch();
  const coinList = useSelector(state => state.coin.list);
  const coinDetail = useSelector(state => state.coin.detail);

  useEffect(() => {
    coinList.length > 0 && getCoinDetail(0);
  }, [coinList]);

  const getCoinList = ({ status, tag }) => {
    dispatch(coinAction.getCoinList({ status, tag }));
  };

  const getCoinDetail = i => {
    const slug = coinList[i].crypto.slug;
    dispatch(coinAction.getCoinDetail({ slug: slug }));
  };

  return {
    coinList,
    coinDetail,
    getCoinList,
    getCoinDetail,
  };
};

export default useCoinList;
