import {START_LOAD, STOP_LOAD} from "../constants/ActionTypes";


const startLoad = () => {
    return {
        type: START_LOAD
    }
};

const stopLoad = () => {
    return {
        type: STOP_LOAD
    }
};

export {
    startLoad,
    stopLoad
};
