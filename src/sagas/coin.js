import { put, call, takeLatest } from "redux-saga/effects";
import { apiRequest } from "../setting";
import { action as coinAction } from "../modules/coin";

function* getCoinList(action) {
  try {
    const response = yield call(apiRequest, {
      url: "/data-api/v3/ico/search",
      method: "GET",
      params: {
        start: 1,
        limit: 100,
        status: action.payload.status,
      },
    });

    yield put(coinAction.setCoinList(response.data.data.icoList));
  } catch (error) {}
}

function* getCoinDetail(action) {
  const { slug } = action.payload;
  try {
    const response = yield call(apiRequest, {
      url: "/data-api/v3/cryptocurrency/detail",
      method: "GET",
      params: {
        slug: slug,
      },
    });

    yield put(coinAction.setCoinDetail(response.data.data));
  } catch (error) {}
}

export function* coinAsync() {
  yield takeLatest(coinAction.getCoinList, getCoinList);
  yield takeLatest(coinAction.getCoinDetail, getCoinDetail);
}
