import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import rootReducer from "./modules";
import { rootSaga } from "./sagas";

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({ context: { history: customHistory } });

const store = configureStore({
  reducer: rootReducer,
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === "development" ? true : false,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
