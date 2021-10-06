import React from "react";
import PropTypes from "prop-types";

import styles from './InputSlider.module.scss';


const InputSlider = ({items, value, defaultValue, onChange, infinity}) => {

    const [current, setCurrent] = React.useState(Number.isInteger(defaultValue) ? defaultValue : value);

    return (
        <div className={styles.inputSlider}>
            <button className={styles.button} onClick={() => {
                setCurrent((prev) => {
                    const value = prev >= 1 ? --prev : infinity ? items.length-1 : prev;
                    if (typeof onChange === 'function') {
                        onChange(value);
                    }
                    return value;
                })
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 44">
                    <path fill="#00c8ff"
                          d="M17.15,12.49h2.07c.39,0,.62.52.43.93l-3.86,8.15a1.53,1.53,0,0,0,0,1.32L19.65,31c.19.41,0,.93-.43.93H17.15a1,1,0,0,1-.9-.64l-3.91-8.45a1.55,1.55,0,0,1,0-1.3l3.91-8.45A1,1,0,0,1,17.15,12.49Z"/>
                </svg>
            </button>
            <div className={styles.value}>
                {items[current]}
            </div>
            <button className={styles.button} onClick={() => {
                setCurrent((prev) => {
                    const value = prev < items.length - 1 ? ++prev : infinity ? 0 : prev;
                    if (typeof onChange === 'function') {
                        onChange(value);
                    }
                    return value;
                })
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 44">
                    <path fill="#00c8ff"
                          d="M15,12.49H12.88c-.39,0-.62.52-.43.93l3.86,8.15a1.53,1.53,0,0,1,0,1.32L12.45,31c-.19.41,0,.93.43.93H15a1,1,0,0,0,.9-.64l3.91-8.45a1.55,1.55,0,0,0,0-1.3l-3.91-8.45A1,1,0,0,0,15,12.49Z"/>
                </svg>
            </button>
        </div>
    );
}

InputSlider.propTypes = {
    items: PropTypes.array.isRequired,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    infinity: PropTypes.bool
};
InputSlider.defaultProps = {
    value: 0,
    items: [],
}

export default InputSlider;