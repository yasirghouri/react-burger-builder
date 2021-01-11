import axios from "../../axios-orders";

import { put } from "redux-saga/effects";
import * as actions from "../actions";

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  const response = yield axios.post(
    "/orders.json?auth=" + action.token,
    action.orderData
  );
  try {
    yield put(
      actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    );
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart());
  const queryParams =
    "?auth=" +
    action.token +
    '&orderBy="userId"&equalTo="' +
    action.userId +
    '"';
  const res = yield axios.get("/orders.json" + queryParams);
  try {
    const fetchedOrders = [];
    for (const key in res.data) {
      fetchedOrders.push({
        ...res.data[key],
        id: key,
      });
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.fetchOrdersFail(err));
  }
}
