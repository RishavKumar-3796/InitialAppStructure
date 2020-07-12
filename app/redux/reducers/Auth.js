
import Reduxer, { immutableMerge } from '../Reduxer';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types/Auth';

export const INITIAL_STATE = Object.freeze({
    fetching: false,
    error: null,
    loginData: null,
});


const request = (state) =>
    immutableMerge(state, {
        fetching: true,
        error: null,
    });

const success = (state, action) => {
    const data = action.payload;
    console.log(data);
    return immutableMerge(state, {
        fetching: false,
        loginData: data,
        error: null
    });
}

const failure = (state, action) => {
    const error = action.payload;
    return immutableMerge(state, {
        fetching: false,
        videoLoader: false,
        error: error
    });
}


export default Reduxer(INITIAL_STATE, {
    [LOGIN_REQUEST]: request,
    [LOGIN_SUCCESS]: success,
    [LOGIN_FAILURE]: failure,
});