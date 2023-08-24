import React from "react";
import styles from './Item.module.scss';

const Item = ({img, text, active}) => {
    return (
        <div className={styles.item}>
            <div className={`${styles.border} ${active ? styles.active : ''}`}>
                <div className={styles.img}>
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className={`${styles.name} ${active ? styles.active : ''}`}>
                {text}
            </div>
        </div>
    );
};

export default Item;