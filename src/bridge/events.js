import EventManager from "./bridge";
import {hideAuthorization, showCharacterSelector} from "../redux/actions/forms";

export const playerEvents = (dispatch, getState) => {
    EventManager.on('showCharacterSelector', (data) => {
        dispatch(showCharacterSelector(data));
    });

    EventManager.on('closeLoginPanel', () => {
        dispatch(hideAuthorization());
    });
};


