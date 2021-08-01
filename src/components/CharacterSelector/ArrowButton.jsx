import React from "react";

import styles from "./ArrowButton.module.scss";

const ArrowButton = ({direction}) => {
    return (
        <div className={`${styles.arrow} ${direction === 'left' ? styles.left : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 63 124">
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00c8ff"/>
                    </filter>
                    <style>{`.cls-1{stroke:#00c8ff;stroke-miterlimit:10; filter:url('#shadow');}`}</style>
                </defs>
                <path className="cls-1"
                      d="M25.86,12.5H15.3c-1.93,0-3.13,2.65-2.14,4.73l19.61,41.4a8.09,8.09,0,0,1,0,6.74l-19.61,41.4c-1,2.08.21,4.73,2.14,4.73H25.86a5.17,5.17,0,0,0,4.54-3.28l19.89-42.9a8.09,8.09,0,0,0,0-6.64L30.4,15.78A5.17,5.17,0,0,0,25.86,12.5Z"/>
            </svg>
        </div>);
};

export default ArrowButton;