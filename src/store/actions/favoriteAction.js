import {
  FAVORITE_ACTION,
  FAVORITE_ACTION_SUCCESS,
  FAVORITE_ACTION_FAILED,
} from "../constants/favoriteConstant";

export const favoriteAction = (body) => ({
  type: FAVORITE_ACTION,
  body,
});

export const favoriteSuccess = (data) => ({
  type: FAVORITE_ACTION_SUCCESS,
  data,
});

export const favoriteFailed = (err) => ({
  type: FAVORITE_ACTION_FAILED,

  err,
});
