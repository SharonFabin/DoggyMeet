import * as ACTIONS from "../constants/action-types"
import * as firebase from "firebase";

const setPersonData = (personData) => {
    return {
        type: ACTIONS.SET_PERSON_DATA,
        value: personData
    };
};

const watchPersonData = () => {
    return function (dispatch) {
        firebase.database().ref("person").on("value", function (snapshot) {
            var personData = snapshot.val();
            var actionSetPersonData = setPersonData(personData);
            dispatch(actionSetPersonData);
        }, function (error) {
            console.log(error);
        });
    }
};

export {watchPersonData};
