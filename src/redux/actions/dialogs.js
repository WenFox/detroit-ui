import constants from "../constants";
import {dialogs} from "../../bridge/dialogs";
import MessageBox from "../../components/Dialogs/MessageBox";

export const showMessageBox = (dialogId, data) => {
    const dialog = dialogs(dialogId, data);
    return ({
        type: constants.SHOW_MESSAGE_BOX,
        payload: (
            <MessageBox
                dialogId={dialog.dialogId}
                title={dialog.title}
                button1={dialog.button1}
                button2={dialog.button2}
                data={dialog.data}
            >
                {dialog.text}
            </MessageBox>),
    })
};
export const showEditBox = (title, text, button1, button2) => ({
    type: constants.SHOW_EDIT_BOX,
    payload: {
        title: title,
        text: text,
        button1: button1,
        button2: button2
    }
});

export const closeDialog = () => ({
    type: constants.CLOSE_DIALOG,
    payload: null
});
