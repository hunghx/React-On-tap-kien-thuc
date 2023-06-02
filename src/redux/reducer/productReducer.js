import * as constants from '../constants';
const initState= {
    count:0
}

export const productReducer = (state = initState, action) => {
    switch (action.type) {
            case constants.CHANGESTATE:
                return {
                  ...state,
                    count: state.count +1
                }
            default:
                return state
        }
}