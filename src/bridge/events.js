import EventManager from "./bridge";

import store from '../redux/store';
import constants from "../redux/constants";
import {hideAuthorization, showCharacterSelector} from "../redux/actions/forms";

export const playerEvents = (dispatch, getState) => {
    EventManager.on('showCharacterSelector', (data) => {
        dispatch(showCharacterSelector(data));
    });

    EventManager.on('closeLoginPanel', () => {
        dispatch(hideAuthorization());
    });
};


