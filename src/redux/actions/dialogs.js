import constants from "../constants";
import {dialogs} from "../../bridge/dialogs";
import MessageBox from "../../components/Dialogs/MessageBox";

export const showMessageBox = (dialog, ...props) => {
    const data = dialogs(dialog, ...props);
    return ({
        type: constants.SHOW_MESSAGE_BOX,
        payload: <MessageBox
            dialogId={data.dialogId}
            title={data.title} button1={data.button1} button2={data.button2}
            onClick={() => {
            }}>{data.text}
        </MessageBox>,
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
