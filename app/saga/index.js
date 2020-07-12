import { all, takeLatest } from 'redux-saga/effects';
import { loginUser } from './Auth';
import { LOGIN_REQUEST } from '../redux/types/Auth';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN_REQUEST, loginUser),
    ]);
}
