import React from "react";

import styles from './Characteristics.module.scss';
import Slider from "rc-slider";
import EventManager from "../../../bridge/bridge";
import InputSlider from "../../utils/InputSlider";

const Characteristics = ({filter, faceFeatures, setFaceFeatures, customizations, setCustomizations}) => {

    /*
        При добавлении новых характеристик в InputSlider сделать нормальную загрузку текущего значения
    */
    const items = [
        {
            name: 'Ширина носа',
            key: 0,
            category: 0,
            type: 0, // scroll
        },
        {
            name: 'Высота носа',
            key: 1,
            category: 0,
            type: 0, // scroll
        },
        {
            name: 'Длина носа',
            key: 2,
            category: 0,
            type: 0, // scroll
        },
        {
            name: 'Носовая перемычка',
            key: 3,
            category: 0,
            type: 0, // scroll
        },
        {
            name: 'Кончик носа',
            key: 4,
            category: 0,
            type: 0, // scroll
        },
        {
            name: 'Смещение носа',
            key: 5,
            category: 0,
            type: 0, // scroll
        },
        {
            name: 'Высота бровей',
            key: 6,
            category: 1,
            type: 0, // scroll
        },
        {
            name: 'Глубина бровей',
            key: 7,
            category: 1,
            type: 0, // scroll
        },
        {
            name: 'Высота скул',
            key: 8,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Ширина скул',
            key: 9,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Ширина щек',
            key: 10,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Размер глаз',
            key: 11,
            category: 2,
            type: 0, // scroll
        },
        {
            name: 'Толщина губ',
            key: 12,
            category: 3,
            type: 0, // scroll
        },
        {
            name: 'Ширина челюсти',
            key: 13,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Форма челюсти',
            key: 14,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Высота подбородка',
            key: 15,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Глубина подбородка',
            key: 16,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Ширина подбородка',
            key: 17,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Форма подбородка',
            key: 18,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Обхват шеи',
            key: 19,
            category: 4,
            type: 0, // scroll
        },
        {
            name: 'Цвет глаз',
            key: 'eyeColour',
            category: 2,
            type: 1, // miniSlider
            data: ['Зеленый', 'Изумрудный', 'Голубой', 'Синий', 'Шатен', 'Коричневый', 'Карий', 'Темно-серый', 'Серый'],
        },
    ];

    const onSliderChange = (key, value) => {
        setFaceFeatures(prev => {
            let arr = prev.slice();

            arr[key] = value;
            return arr;
        });
        EventManager.callServer('characterEditor.onFaceFeatureUpdate', key, value);
    }
    const onCustomizationChange = (key, value) => {
        switch (key)
        {
            case 'eyeColour': {
                setCustomizations((prev) => ({...prev, eyeColour: value}));
                EventManager.callServer('characterEditor.onEyeColourUpdate', value);
                break;
            }
            default: {
                break;
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            {items.filter(cat => cat.category === filter).map((item) => (
                item.type === 0 ? (<div className={styles.item} key={item.key}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.slider}>
                        <Slider min={-1} max={1} step={0.1} value={faceFeatures[item.key]}
                                onChange={(value) => {
                                    onSliderChange(item.key, value)
                                }}
                                railStyle={{backgroundColor: "white", height: '2px'}}
                                trackStyle={{backgroundColor: "white", height: '2px'}}
                                handleStyle={{backgroundColor: "#00c8ff", borderColor: "white"}}
                        />
                    </div>
                    <div className={styles.value}>{faceFeatures[item.key]}</div>
                </div>) : (
                   <div className={styles.item} key={item.key}>
                       <div className={styles.name}>{item.name}</div>
                       <div className={styles.inputSlider}>
                           <InputSlider items={item.data} value={customizations.eyeColour} onChange={(value) => onCustomizationChange(item.key, value)} infinity/>
                       </div>

                   </div>
                )
            ))}
        </div>
    );
};

export default Characteristics;