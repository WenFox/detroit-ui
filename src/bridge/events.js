import EventManager from "./bridge";
import {hideAuthorization, showCharacterEditor, showCharacterSelector} from "../redux/actions/forms";
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

    EventManager.on('CharacterEditor.show', (login,donate, initData) => {
        dispatch(showCharacterEditor(login,donate, initData));
    });

    EventManager.on('closeLoginPanel', () => {
        dispatch(hideAuthorization());
    });

    EventManager.on('showMessageBox', (dialog, data) => {
        dispatch(showMessageBox(dialog, data));
    });

    EventManager.on('onDialogResponse', (dialog, inputText, response, data) => {
        bridge.callServer('onDialogResponse', dialog, inputText, response, JSON.stringify(data));
        dispatch(closeDialog());
    });

};


