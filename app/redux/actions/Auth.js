import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS, VIDEO_LIST_FAILURE } from "../types/Auth";

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


export const getVideoListRequest = payload => ({
    type: VIDEO_LIST_REQUEST,
    payload
});

export const getVideoListSuccess = payload => ({
    type: VIDEO_LIST_SUCCESS,
    payload
});

export const getVideoListFailure = payload => ({
    type: VIDEO_LIST_FAILURE,
    payload
});