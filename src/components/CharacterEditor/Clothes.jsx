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

const Clothes = ({gender, clothes, setClothes}) => {

    const [selectedItem, setSelectedItem] = React.useState(-1);

    const onClothesUpdate = React.useCallback((parentsData) => {
        setClothes(JSON.parse(parentsData));
    }, [setClothes]);

    React.useEffect(() => {
        EventManager.on('characterEditor.onClothesUpdate', onClothesUpdate);
        EventManager.callServer('characterEditor.setCameraPosition', 0);

        return () => {
            EventManager.remove('characterEditor.onClothesUpdate', onClothesUpdate);
        };
    }, [onClothesUpdate]);

    const onClothesChange = (bodyPart, value) => {
        EventManager.callServer('characterEditor.onClothesChange', bodyPart, value);
    };
    return (
        <div className={styles.clothes}>
            <div className={styles.header}>
                Одежда
            </div>
            <div className={styles.content}>
                <div className={`${styles.item} ${selectedItem === 0 ? styles.active : ''}`}
                     onClick={() => setSelectedItem(0)}>
                    <div className={styles.name}>Верх</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={gender === 1 ? maleClothes.tops : femaleClothes.tops} infinity
                                     value={clothes.tops}
                                     onChange={(value) => {
                                         setClothes((prev) => ({...prev, tops: value}));
                                         onClothesChange(0, value);
                                     }}/>
                    </div>
                </div>
                <div className={`${styles.item} ${selectedItem === 1 ? styles.active : ''}`}
                     onClick={() => setSelectedItem(1)}>
                    <div className={styles.name}>Низ</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={gender === 1 ? maleClothes.legs : femaleClothes.legs} infinity
                                     value={clothes.legs}
                                     onChange={(value) => {
                                         setClothes((prev) => ({...prev, legs: value}));
                                         onClothesChange(1, value);
                                     }}/>
                    </div>
                </div>
                <div className={`${styles.item} ${selectedItem === 2 ? styles.active : ''}`}
                     onClick={() => setSelectedItem(2)}>
                    <div className={styles.name}>Обувь</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={gender === 1 ? maleClothes.shoes : femaleClothes.shoes} infinity
                                     value={clothes.shoes}
                                     onChange={(value) => {
                                         setClothes((prev) => ({...prev, shoes: value}));
                                         onClothesChange(2, value);
                                     }}/>
                    </div>
                </div>
                <div className={`${styles.item} ${selectedItem === 3 ? styles.active : ''}`}
                     onClick={() => setSelectedItem(3)}>
                    <div className={styles.name}>Головной убор</div>
                    <div className={styles.inputSlider}>
                        <InputSlider items={gender === 1 ? maleClothes.hats : femaleClothes.hats} infinity
                                     value={clothes.hats} onChange={(value) => {
                            setClothes((prev) => ({...prev, hats: value}));
                            onClothesChange(3, value);
                        }}/>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div>
                    <button onClick={() => EventManager.callServer('characterEditor.resetClothes')}>Сброс</button>
                </div>
                <div>
                    <button onClick={() => EventManager.callServer('characterEditor.randomClothes')}>Случайно</button>
                </div>
            </div>
        </div>

    );
}

export default Clothes;