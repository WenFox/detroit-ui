import constants from "../constants";
import Authorization from '../../pages/Authorization';
const initState = [
    <Authorization/>
];

export const forms = (state = initState, actions) => {
    switch (actions.type) {
        case constants.SET_FORM: {
            return [
                actions.payload
            ]
        }

        case constants.HIDE_CHARACTER_SELECTOR: {
            return []
        }
        default: {
            return state;
        }
    }
};

