import React from "react";
import PropTypes from "prop-types";

import styles from './Input.module.scss'

const Input = ({name, type, title, placeholder, inputValue, onChangeValue, maxLength, error}) => {
    return (
        <div className={styles.input}>
            <div>
                <div className={`${styles.title} ${error ? styles.error : ''}`}>{title}</div>
                <label>
                    <input
                        name={name}
                        onChange={onChangeValue}
                        type={type}
                        className={`${styles.field} ${error ? styles.error : ''}`}
                        placeholder={placeholder}
                        value={inputValue}
                        maxLength={maxLength}
                    />
                </label>
            </div>
        </div>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChangeValue: PropTypes.func.isRequired,
    maxLength: PropTypes.number,
    error: PropTypes.bool
};

Input.defaultProps = {
    type: 'text',
    title: '',
    placeholder: '',
    inputValue: '',
    maxLength: 30,
    error: false
};

export default Input;