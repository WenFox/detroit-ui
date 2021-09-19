import EventManager from "./bridge";
import {hideAuthorization, showCharacterSelector} from "../redux/actions/forms";
import {closeDialog, showMessageBox} from "../redux/actions/dialogs";
import bridge from "./bridge";
import {initDialogs} from "./dialogs";

export const playerEvents = (dispatch, getState) => {
    EventManager.on('initDialogs', (data) => {
        initDialogs(data);
    });

    EventManager.on('showCharacterSelector', (data) => {
        dispatch(showCharacterSelector(data));
    });

    EventManager.on('showCharacterEditor', () => {

    });

    EventManager.on('closeLoginPanel', () => {
        dispatch(hideAuthorization());
    });

    EventManager.on('showMessageBox', (dialog, data) => {
        console.log(dialog, data);
        dispatch(showMessageBox(dialog, data));
    });

    EventManager.on('onDialogResponse', (dialog, inputText, response, data) => {
        bridge.callServer('onDialogResponse', dialog, inputText, response, JSON.stringify(data));
        dispatch(closeDialog());
    });

};


