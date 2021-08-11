import constants from "../constants";

const initState = null;

export const dialogs = (state = initState, actions) => {
    switch (actions.type) {
        case constants.SHOW_MESSAGE_BOX: {
            return actions.payload;
        }
        case constants.SHOW_EDIT_BOX: {
            return actions.payload;
        }
        case constants.CLOSE_DIALOG: {
            return actions.payload;
        }
        default: {
            return state;
        }
    }
};