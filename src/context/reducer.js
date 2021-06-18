import * as ActionTypes from './constants';

export const reducer = (state, action) => {

    const dispatch = state.dispatch;
    if (typeof action === 'function') {
        action(dispatch);
        return;
    } 

    switch (action.type) {
        case ActionTypes.RESUME_SET_RESUME_INFO:
            return {
                ...state,
                resume: action.payload
            }
        default:
            return state;
    }
}