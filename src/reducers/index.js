import * as ACTIONS from "../constants/action-types";


const initialState = {
    personData: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_PERSON_DATA:
            return {...state, personData: action.value};
        default:
            return state;
    }
};

export default rootReducer;