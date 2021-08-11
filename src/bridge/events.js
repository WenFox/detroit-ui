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

    EventManager.on('closeLoginPanel', () => {
        dispatch(hideAuthorization());
    });

    EventManager.on('showMessageBox', (dialog, ...props) => {
        dispatch(showMessageBox(dialog, ...props));
    });

    EventManager.on('onDialogResponse', (dialog, inputText, response) => {
        bridge.callServer('onDialogResponse', dialog, inputText, response);
        dispatch(closeDialog());
    });

};


