import React from "react";
import PropTypes from 'prop-types';
import EventManager from "../../bridge/bridge";

import styles from './MessageBox.module.scss';

const MessageBox = ({children, title, button1, button2, dialogId, data}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.messageBox}>
                <div className={styles.title}>
                    <div className={styles.text}>
                        {title}
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.text}>{children}</div>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={(event) => {event.preventDefault(); EventManager.call('onDialogResponse',dialogId, null, true, data)}}><span>{button1}</span></button>
                        {
                            button2 &&
                            <button className={styles.button} onClick={(event) => {event.preventDefault(); EventManager.call('onDialogResponse',dialogId, null, false, data)}}><span>{button2}</span></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

MessageBox.propTypes = {
    dialogId: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    button1: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]).isRequired,
    button2: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
};

export default MessageBox;