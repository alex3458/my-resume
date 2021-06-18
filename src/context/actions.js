import {
    RESUME_SET_RESUME_INFO
} from './constants';

export const setResume = info => ({
    type: RESUME_SET_RESUME_INFO,
    payload: info
});
