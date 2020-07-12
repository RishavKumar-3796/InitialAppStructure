import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types/Auth";

export const loginRequest = payload => ({
    type: LOGIN_REQUEST,
    payload
});

export const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
});

export const loginFailure = payload => ({
    type: LOGIN_FAILURE,
    payload
});