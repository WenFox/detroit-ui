import React from "react";
import styles from "./EditBox.module.scss";
import PropTypes from "prop-types";

const EditBox = ({title, children, ok, cancel, onClick}) => {
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
                    <div className={styles.input}>
                        <input maxLength='128' type='text'/>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={() => onClick(true)}><span>{ok}</span></button>
                        {
                            cancel &&
                            <button className={styles.button} onClick={() => onClick(false)}><span>{cancel}</span></button>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

EditBox.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    ok: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]).isRequired,
    cancel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    onClick: PropTypes.func.isRequired
};

export default EditBox;