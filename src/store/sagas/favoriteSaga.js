import { put, takeLatest, call, takeEvery, ge } from "redux-saga/effects";
import {
  favoriteAction,
  favoriteFailed,
  favoriteSuccess,
} from "../actions/favoriteAction";
import { FAVORITE_ACTION } from "../constants/favoriteConstant";
import API from "../../utils/axios";
import { AUTH_URL } from "../../urlConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { hanldeError } from "../../utils/handleError";

export function* favoritesAction() {
  try {
    const res = yield API.get(
      `http://django-datawarehouse.ksechain.com/workspaces/sumAll`
    );
    console.log({ res });

    if (res) {
      yield put(favoriteSuccess(res));
    }
  } catch (error) {
    console.log("error", error);
    // hanldeError(error);

    yield put(favoriteFailed(error));
  }
}

export default function* favoriteSagaAction() {
  yield takeLatest(FAVORITE_ACTION, favoritesAction);
}
