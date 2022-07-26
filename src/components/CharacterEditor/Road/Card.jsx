import React from "react";

import styles from './Card.module.scss'

const Card = ({title, isDisable}) => {
    return (
        <div className={`${styles.card} ${isDisable ? styles.disable : "" }`}>
            <div className={styles.title}>{title}</div>
            <div className={`${styles.content} ${isDisable ? styles.disable : "" }`}>
                {
                    isDisable ?
                        <p>Данная сюжетная линия <br/> в данный момент недоступна</p> :
                        <div className={styles.image}></div>
                }

            </div>
        </div>
    )
}

export default Card