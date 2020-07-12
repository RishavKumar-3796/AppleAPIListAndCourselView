import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, VIDEO_LIST_REQUEST } from '../redux/types/Auth';
import { loginUser, fetchMovieList } from './Auth';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN_REQUEST, loginUser),
        takeLatest(VIDEO_LIST_REQUEST, fetchMovieList),
    ]);
}
