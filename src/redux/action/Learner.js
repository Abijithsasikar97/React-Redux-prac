import {
    AUTHENTICATED,
    SHOW_LOADING,
    LOG_OUT,
    LEARNER_OBJ
} from '../constants/Learner';


export const authenticated = user => ({
    type: AUTHENTICATED,
    payload: user
});

export const showLoading = () => ({
    type: SHOW_LOADING
});

export const logOut = () => ({
    type: LOG_OUT
});

export const learnerData = learner => ({
    type: LEARNER_OBJ,
    payload: learner
});