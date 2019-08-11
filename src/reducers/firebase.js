import * as ACTIONS from "../constants/ActionTypes";

const initialState = {
    personData: {}
};

const setPersonData = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_PERSON_DATA:
            return {...state, personData: action.value};
        default:
            return state;
    }
};

export {setPersonData};