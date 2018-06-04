
import { SIGN_IN, LOGIN, SEARCH } from '../info/constants';
import { headerStore } from '../info/store';

export default function headerReducer(state = headerStore, action) {
    switch (action.type) {
        case SIGN_IN:

            // console.group('SIGN_IN');
            // console.warn('choose with:');
            // console.table(action);

            return state;
        case LOGIN:

            if (!action.isStartedLogin) {
                state.isStartedLogin = true;
            } else {
                state.name = action.value;
                state.isSignIn = true;
            }

            return Object.assign({}, state);
        case SEARCH:
            return state;
        default:
            return state;
    }
}
