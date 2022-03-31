import React from "react";
import styles from './Appearance.module.scss';

import {InputSlider} from "../../utils";
import EventManager from "../../../bridge/bridge";
import {overlaysName} from "./headOverlaysData";


const HeadOverlays = ({overlay, setOverlay}) => {

    const [activeItem, setActiveItem] = React.useState(-1);
    const items = [
        {
            key: 0,
            name: 'Дефекты',
            valueNames: overlaysName.blemishes,
        },
        {
            key: 1,
            name: 'Борода',
            valueNames: overlaysName.facialHair,
        },
        {
            key: 2,
            name: 'Брови',
            valueNames: overlaysName.eyebrows,
        },
        {
            key: 3,
            name: 'Старение',
            valueNames: overlaysName.ageing,
        },
        {
            key: 6,
            name: 'Румянец',
            valueNames: overlaysName.complexion,
        },
        {
            key: 7,
            name: 'Веснушки',
            valueNames: overlaysName.sunDamage,
        },
        {
            key: 8,
            name: 'Помада',
            valueNames: overlaysName.lipstick,
        },
        {
            key: 9,
            name: 'Родинки',
            valueNames: overlaysName.moles,
        },
        {
            key: 10,
            name: 'Волосы на груди',
            valueNames: overlaysName.chestHair,
        },
        {
            key: 11,
            name: 'Пятна на теле',
            valueNames: overlaysName.bodyBlemishes,
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
                        <InputSlider items={item.valueNames} value={overlay[item.key]}
                                     onChange={(value) => onSliderChange(item.key, value)}/>
                    </div>
                ))
            }
        </div>
    </div>);
};

export default HeadOverlays;
