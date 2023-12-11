import {
  changePassword,
  getUserInfo,
  getUserInfoById,
  login,
  signUp,
  updateUserInfo,
} from 'app/shared/core/services/auth';
import { UserConstant } from 'app/shared/constants/UserConstant';
import { UserLoginOptions } from 'app/shared/types/UserLogin';
import { PasswordOptions } from 'app/shared/types/Password';
import { UserInfoOptions } from 'app/shared/models/User';
import { localStorageOption } from 'app/shared/helper/LocalAction';
import { apiWrapper } from 'app/shared/core/services/apiWrapper';

export const loginRequest =
  (userInfo) => async (dispatch) => {
    dispatch({ type: UserConstant.LOGIN_REQUEST, payload: userInfo });
    try {
      const data = await login(userInfo);
      dispatch({ type: UserConstant.LOGIN_SUCCESS, payload: data });
      localStorageOption.setUserToken(data.accessToken);
      // localStorageOption.setUserId(data.userInfo.id);
      window.location.href = `${window.location.origin}`;
    } catch (error) {
      dispatch({
        type: UserConstant.LOGIN_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const signUpRequest =
  (userInfo, callback) => async (dispatch) => {
    dispatch({ type: UserConstant.SIGN_UP_REQUEST, payload: userInfo });
    try {
      const data = await signUp(userInfo);
      dispatch({ type: UserConstant.SIGN_UP_SUCCESS, payload: data });
      callback();
    } catch (error) {
      dispatch({
        type: UserConstant.SIGN_UP_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const logoutRequest = () => {
  localStorageOption.remove();
  return {
    type: UserConstant.LOGOUT,
  };
};

export const getUserInfoRequest = () => async (dispatch) => {
  dispatch({ type: UserConstant.GET_USER_INFO_REQUEST });
  try {
    const data = await getUserInfo();
    dispatch({ type: UserConstant.GET_USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    if (error.response?.status === 401) {
      localStorageOption.remove();
      dispatch({
        type: UserConstant.GET_USER_INFO_FAILURE,
        payload: error.response.statusText,
      });
    } else {
      dispatch({
        type: UserConstant.GET_USER_INFO_FAILURE,
        payload: error.response?.data.errors[0],
      });
    }
  }
};

export const changePasswordRequest =
  (info) => async (dispatch) => {
    dispatch({ type: UserConstant.CHANGE_PASSWORD_REQUEST });
    try {
      const data = await changePassword(info);
      dispatch({ type: UserConstant.CHANGE_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UserConstant.CHANGE_PASSWORD_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const updateUserInfoRequest =
  (info) => async (dispatch) => {
    dispatch({ type: UserConstant.UPDATE_USER_INFO_REQUEST });
    try {
      const data = await updateUserInfo(info);
      dispatch({
        type: UserConstant.UPDATE_USER_INFO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error.response.status === 401) {
        localStorageOption.remove();
        dispatch({
          type: UserConstant.CHANGE_PASSWORD_FAILURE,
          payload: error.response.statusText,
        });
      } else {
        dispatch({
          type: UserConstant.UPDATE_USER_INFO_FAILURE,
          payload: error.response.data.errors[0],
        });
      }
    }
  };

export const getUserInfoByIdRequest =
  (id) => async (dispatch) => {
    return apiWrapper(() => getUserInfoById(id), dispatch);
  };

export const showModalSignInRequest = (value) => {
  return {
    type: UserConstant.SHOW_MODAL_SIGN_IN,
    payload: value,
  };
};

export const clearUserState = () => {
  return {
    type: UserConstant.CLEAR_USER_STATE,
  };
};
