import axios from "../../axios-orders";

import { put } from "redux-saga/effects";
import * as actions from "../actions";

const ingredientURL = process.env.REACT_APP_INGREDIENT_URL;

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get(ingredientURL);
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
