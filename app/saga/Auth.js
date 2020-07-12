import { call, put } from 'redux-saga/effects';
import API from '../services/Api';
import { loginSuccess, loginFailure, getVideoListSuccess, getVideoListFailure } from '../redux/actions/Auth';
import { getError } from '../services/Utils';


export function* loginUser(action) {
    console.log('action', action);
    const api = API.auth();
    const response = yield call(api.loginUser, action?.payload);
    console.log('response', response);
    if (response?.status === 200) {
        yield put(loginSuccess(response?.data));
    } else {
        const error = getError(response);
        yield put(loginFailure(error));
    }
}


export function* fetchMovieList(action) {
    const api = API.auth();
    const response = yield call(api.videoListRequest, action.payload);
    if (response?.status === 200) {
        yield put(getVideoListSuccess(response?.data));
    } else {
        const error = getError(response);
        yield put(getVideoListFailure(error));
    }
}