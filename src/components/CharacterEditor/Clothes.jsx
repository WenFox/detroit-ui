import React from "react";

import styles from './Clothes.module.scss'
import InputSlider from "../utils/InputSlider";
import EventManager from "../../bridge/bridge";

const maleClothes = {
    legs: [0, 3, 6],
    shoes: [1, 3, 42, 97],
    tops: [0, 3, 33, 90],
    hats: []
};

const femaleClothes = {
    legs: [0, 4, 30],
    shoes: [1, 3, 5, 6, 13],
    tops: [0, 3, 9, 49],
    hats: []
};

const Clothes = ({gender}) => {

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
                        <InputSlider items={gender === 1 ? maleClothes.tops : femaleClothes.tops} infinity
                                     onChange={(value) => onClothesChange(0, value)}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.name}>Низ</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={gender === 1 ? maleClothes.legs : femaleClothes.legs} infinity
                                     onChange={(value) => onClothesChange(1, value)}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.name}>Обувь</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={gender === 1 ? maleClothes.shoes : femaleClothes.shoes} infinity
                                     onChange={(value) => onClothesChange(2, value)}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.name}>Головной убор</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={gender === 1 ? maleClothes.hats : femaleClothes.hats} infinity onChange={(value) => onClothesChange(3, value)}/>
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