import React from "react";
import styles from "./Gender.module.scss";

import fem from "../../assets/img/CharacterEditor/fem_prev.png";
import male from "../../assets/img/CharacterEditor/male_prev.png";
import EventManager from "../../bridge/bridge";


const Gender = ({setPage}) => {
    return (
        <div className={styles.gender}>
            <div className={styles.block} onClick={() => {
                EventManager.callServer('onGenderChange', 1);
                setPage(1);
            }}>
                <div className={styles.male}>
                    <div className={styles.title}>
                        Мужчина
                    </div>
                    <div className={styles.preview}>
                        <img src={male} alt="male" draggable="false"/>
                    </div>
                </div>
            </div>
            <div className={styles.block} onClick={() => {
                EventManager.callServer('onGenderChange', 0)
                setPage(1);
            }}>
                <div className={styles.female}>
                    <div className={styles.title}>
                        Женщина
                    </div>
                    <div className={styles.preview}>
                        <img src={fem} alt="female" draggable="false"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gender;