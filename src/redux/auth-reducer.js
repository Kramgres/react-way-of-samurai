import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_CAPTCHA:
            return {...state, captchaUrl: action.captchaUrl}
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth, captcha, captchaUrl) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth, captcha, captchaUrl}
});
export const setCaptcha = (captchaUrl) => ({type: SET_CAPTCHA, captchaUrl});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getCurrentUser();
    if (response.resultCode === 0) {
        let userId = response.data.id;
        let {email, login} = response.data;
        dispatch(setAuthUserData(userId, email, login, true, null, null));
    }
}

export const getCaptcha = () => async (dispatch) => {
    let response = await securityApi.getCaptcha();
    dispatch(setCaptcha(response.url));
}

export const login = (loginData) => async (dispatch) => {
    let response = await authAPI.login(loginData)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData(response.data.userId))
    } else if (response.resultCode === 10) {
        dispatch(getCaptcha());
    } else {
        dispatch(stopSubmit("login", {_error: "Email or password is wrong"}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;