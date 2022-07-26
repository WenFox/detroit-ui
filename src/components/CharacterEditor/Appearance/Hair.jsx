import React from "react";

import styles from './Appearance.module.scss';

import {maleHairs, femaleHairs, hairColors} from './hairData';
import {overlaysName} from './headOverlaysData';
import {InputSlider} from "../../utils";
import EventManager from "../../../bridge/bridge";

const Hair = ({gender, customizations, setCustomizations, overlay, setOverlay}) => {
    const [activeItem, setActiveItem] = React.useState(-1);

    const onOverlayChange = (key, value) => {
        setOverlay((prev) => {
            const arr = Array.from(prev);
            arr[key] = value;
            return arr;
        });
        EventManager.callServer('characterEditor.onOverlayUpdate', key, value);
    }

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.charItem} ${activeItem === 0 ? styles.active : ''}`}
                 onClick={() => setActiveItem(0)}>
                <div className={styles.name}>Прическа</div>
                <InputSlider items={Array.from(gender === 1 ? maleHairs : femaleHairs, obj => obj.name)}
                             value={customizations.hair} onChange={(value) => {
                    setCustomizations((prev) => ({...prev, hair: value}));
                    EventManager.callServer('characterEditor.onHairUpdate', value);
                }}/>
            </div>
            <div className={`${styles.charItem} ${activeItem === 1 ? styles.active : ''}`}
                 onClick={() => setActiveItem(1)}>
                <div className={styles.name}>Цвет волос</div>
                <InputSlider items={hairColors} value={customizations.hairColour} onChange={(value) => {
                    setCustomizations((prev) => ({...prev, hairColour: value}));
                    EventManager.callServer('characterEditor.onHairColourUpdate', customizations.hairColour, customizations.hairSecondColour);
                }}/>
            </div>
            <div className={`${styles.charItem} ${activeItem === 2 ? styles.active : ''}`}
                 onClick={() => setActiveItem(2)}>
                <div className={styles.name}>Дополнительный цвет волос</div>
                <InputSlider items={hairColors} value={customizations.hairSecondColour} onChange={(value) => {
                    setCustomizations((prev) => ({...prev, hairSecondColour: value}));
                    EventManager.callServer('characterEditor.onHairColourUpdate', customizations.hairColour, customizations.hairSecondColour);
                }}/>
            </div>
            {
                gender === 1 && (<div className={`${styles.charItem} ${activeItem === 3 ? styles.active : ''}`}
                                      onClick={() => setActiveItem(3)}>
                    <div className={styles.name}>Борода</div>
                    <InputSlider value={overlay[1]} items={overlaysName.facialHair} onChange={(value) => {
                        onOverlayChange(1, value);
                    }}/>
                </div>)
            }
            {
                gender === 1 && (<div className={`${styles.charItem} ${activeItem === 4 ? styles.active : ''}`}
                                      onClick={() => setActiveItem(4)}>
                    <div className={styles.name}>Цвет бороды</div>
                    <InputSlider value={overlay[1]} items={overlaysName.facialHair} onChange={(value) => {
                        onOverlayChange(1, value);
                    }}/>
                </div>)
            }
        </div>
    );
};

export default Hair;