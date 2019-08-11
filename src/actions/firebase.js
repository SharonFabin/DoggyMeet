import {SET_PERSON_DATA} from "../constants/ActionTypes";
import * as firebase from "firebase";

const setPersonData = (personData) => {
    return {
        type: SET_PERSON_DATA,
        value: personData
    };
};

const watchPersonData = () => {
    return (dispatch) => {
        firebase.database().ref("person").on("value", function (snapshot) {
            var personData = snapshot.val();
            var actionSetPersonData = setPersonData(personData);
            dispatch(actionSetPersonData);
        }, function (error) {
            console.log(error);
        });
    }
};

export {setPersonData, watchPersonData}