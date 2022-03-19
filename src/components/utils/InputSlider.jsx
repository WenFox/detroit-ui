import React from "react";
import PropTypes from "prop-types";

import styles from './InputSlider.module.scss';

//TODO: Выполнить рефакторинг!
const InputSlider = ({items, value, defaultValue, onChange, infinity}) => {

    //const [current, setCurrent] = React.useState(Number.isInteger(defaultValue) ? defaultValue : value);

    return (
        <div className={styles.inputSlider}>
            <button className={styles.button} onClick={() => {
                /*setCurrent((prev) => {
                    return prev >= 1 ? --prev : infinity ? items.length - 1 : prev;
                });*/
                if (typeof onChange === 'function') {
                    let newValue = value
                    onChange(newValue >= 1 ? --newValue : infinity ? items.length - 1 : newValue);
                }
            }}>
                <svg width="8" height="20" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.15002 0.48999H7.22002C7.61002 0.48999 7.84002 1.00999 7.65002 1.41999L3.79002 9.56999C3.69149 9.77606 3.64035 10.0016 3.64035 10.23C3.64035 10.4584 3.69149 10.6839 3.79002 10.89L7.65002 19C7.84002 19.41 7.65002 19.93 7.22002 19.93H5.15002C4.95373 19.9235 4.76371 19.8593 4.60366 19.7455C4.44361 19.6317 4.32061 19.4733 4.25002 19.29L0.340019 10.84C0.245893 10.6362 0.197144 10.4144 0.197144 10.19C0.197144 9.96554 0.245893 9.74376 0.340019 9.53999L4.25002 1.08999C4.32671 0.914208 4.45232 0.764184 4.61189 0.657803C4.77147 0.551421 4.95826 0.493169 5.15002 0.48999V0.48999Z" fill="#00C8FF"/>
                </svg>

            </button>
            <div className={styles.value}>
                {items[value]}
            </div>
            <button className={styles.button} onClick={() => {
                /*setCurrent((prev) => {
                    return prev < items.length - 1 ? ++prev : infinity ? 0 : prev;
                });*/
                if (typeof onChange === 'function') {
                    let newValue = value
                    onChange(newValue < items.length - 1 ? ++newValue : infinity ? 0 : newValue);
                }
            }}>
                <svg width="8" height="20" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99995 0.48999H0.879947C0.489947 0.48999 0.259947 1.00999 0.449947 1.41999L4.30995 9.56999C4.40848 9.77606 4.45962 10.0016 4.45962 10.23C4.45962 10.4584 4.40848 10.6839 4.30995 10.89L0.449947 19C0.259947 19.41 0.449947 19.93 0.879947 19.93H2.99995C3.19623 19.9235 3.38625 19.8593 3.54631 19.7455C3.70636 19.6317 3.82935 19.4733 3.89995 19.29L7.80995 10.84C7.90407 10.6362 7.95282 10.4144 7.95282 10.19C7.95282 9.96554 7.90407 9.74376 7.80995 9.53999L3.89995 1.08999C3.82326 0.914208 3.69764 0.764184 3.53807 0.657803C3.3785 0.551421 3.1917 0.493169 2.99995 0.48999V0.48999Z" fill="#00C8FF"/>
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