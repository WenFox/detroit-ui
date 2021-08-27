import React from "react";
import styles from "./Gender.module.scss";

import fem from "../../assets/img/CharacterEditor/fem_prev.png";
import male from "../../assets/img/CharacterEditor/male_prev.png";


const Gender = () => {
    return (
        <div className={styles.gender}>
            <div className={styles.block}>
                <div className={styles.male}>
                    <div className={styles.title}>
                        Мужчина
                    </div>
                    <div className={styles.preview}>
                        <img src={male} width={288} height={600} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.female}>
                    <div className={styles.title}>
                        Женщина
                    </div>
                    <div className={styles.preview}>
                        <img src={fem} width={288} height={600} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gender;