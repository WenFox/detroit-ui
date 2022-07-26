import React from "react";
import styles from './Appearance.module.scss';

import {InputSlider} from "../../utils";
import EventManager from "../../../bridge/bridge";
import {overlaysColors, overlaysName} from "./headOverlaysData";
import Slider from "rc-slider";


const HeadOverlays = ({overlay, setOverlay, gender}) => {

    const [activeItem, setActiveItem] = React.useState(-1);

    /******
     * Type: 1 - Selector
     *       0 - Scroll
     ********/
    const items = [
        {
            key: 0,
            name: 'Дефекты',
            valueNames: overlaysName.blemishes,
            type: 1,
        },
        {
            key: 0,
            name: 'Интенсивность дефектов',
            type: 0,
        },
        {
            key: 2,
            name: 'Брови',
            valueNames: overlaysName.eyebrows,
            type: 1,
        },
        {
            key: 2,
            name: 'Цвет бровей',
            type: 0,
        },
        {
            key: 3,
            name: 'Старение',
            valueNames: overlaysName.ageing,
            type: 1,
        },
        {
            key: 3,
            name: 'Интенсивность старения',
            type: 0,
        },
        {
            key: 6,
            name: 'Цвет лица',
            valueNames: overlaysName.complexion,
            type: 1,
        },
        {
            key: 6,
            name: 'Интенсивность цвета',
            type: 0,
        },
        {
            key: 7,
            name: 'Веснушки',
            valueNames: overlaysName.sunDamage,
            type: 1,
        },
        {
            key: 9,
            name: 'Родинки',
            valueNames: overlaysName.moles,
            type: 1,
        },
        {
            key: 9,
            name: 'Интенсивность родинок',
            valueNames: overlaysName.moles,
            type: 1,
        },
        {
            key: 10,
            name: 'Волосы на груди',
            valueNames: overlaysName.chestHair,
            type: 1,
        },
        {
            key: 10,
            name: 'Цвет волос на груди',
            valueNames: overlaysColors.chestHair,
            type: 1,
        },
        {
            key: 11,
            name: 'Пятна на теле',
            valueNames: overlaysName.bodyBlemishes,
            type: 1,
        },

    ];
    const womanItems = [
        {
            key: 8,
            name: 'Помада',
            valueNames: overlaysName.lipstick,
            type: 1,
        },
        {
            key: 8,
            name: 'Цвет помады',
            valueNames: overlaysColors.lipstick,
            type: 1,
        },
    ];

    const onSliderChange = (key, value) => {
        setOverlay((prev) => {
            const arr = Array.from(prev);
            arr[key] = value;
            return arr;
        });
        EventManager.callServer('characterEditor.onOverlayUpdate', key, value);
    }

    return (<div>
        <div className={styles.wrapper}>
            {
                items.map(item => (
                    <div className={`${styles.charItem} ${activeItem === item.key ? styles.active : ''}`} key={item.key}
                         onClick={() => setActiveItem(item.key)}>
                        <div className={styles.name}>{item.name}</div>
                        {
                            item.type === 1 ? (<div className={styles.inputSlider}>
                                <InputSlider items={item.valueNames} value={overlay[item.key]}
                                             onChange={(value) => onSliderChange(item.key, value)}/>
                            </div>) : (<>
                                <div className={styles.slider}>
                                    <Slider min={-1} max={1} step={0.1}
                                            onChange={(value) => {
                                                //onSliderChange(item.key, value);
                                            }}
                                            railStyle={{backgroundColor: "white", height: '2px'}}
                                            trackStyle={{backgroundColor: "white", height: '2px'}}
                                            handleStyle={{backgroundColor: "#00c8ff", borderColor: "white"}}
                                    />
                                </div>
                            <div className={styles.value}>0</div>
                            </>)
                        }

                    </div>
                ))
            }
            {
                gender === 0 &&
                (womanItems.map(item => (
                    <div className={`${styles.charItem} ${activeItem === item.key ? styles.active : ''}`} key={item.key}
                         onClick={() => setActiveItem(item.key)}>
                        <div className={styles.name}>{item.name}</div>
                        {
                            item.type === 1 ? (<InputSlider items={item.valueNames} value={overlay[item.key]}
                                                            onChange={(value) => onSliderChange(item.key, value)}/>) : (null)
                        }
                    </div>
                )))
            }
        </div>
    </div>);
};

export default HeadOverlays;
