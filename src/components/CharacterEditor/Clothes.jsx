import React from "react";

import styles from './Clothes.module.scss'
import InputSlider from "../utils/InputSlider";
import EventManager from "../../bridge/bridge";

const Clothes = () => {

    const onClothesChange = (bodyPart, value) => {
        EventManager.callServer('characterEditor.onClothesChange', bodyPart, value);
    };

    return (
        <div className={styles.clothes}>
            <div className={styles.header}>

                Одежда
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className={styles.name}>Верх</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={['1', '2','3','4']} infinity onChange={(value) => onClothesChange(0, value)}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.name}>Низ</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={['1', '2', '3']} infinity onChange={(value) => onClothesChange(1, value)}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.name}>Обувь</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={['1', '2','3','4']} infinity onChange={(value) => onClothesChange(2, value)}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.name}>Головной убор</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={['1', '2']} infinity onChange={(value) => onClothesChange(3, value)}/>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div>
                    <button>Сброс</button>
                </div>
                <div>
                    <button>Случайно</button>
                </div>
            </div>
        </div>

    );
}

export default Clothes;