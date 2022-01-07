import React from "react";

import styles from './Hair.module.scss';

import {maleHairs, femaleHairs, hairColors} from "./hairData";
import {InputSlider} from "../../utils";
import EventManager from "../../../bridge/bridge";
const Hair = ({gender, customizations, setCustomizations}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.name}>Прическа</div>
                <InputSlider items={Array.from(gender === 1 ? maleHairs : femaleHairs, obj => obj.name)} value={customizations.hair} onChange={(value) => {
                    setCustomizations((prev) => ({...prev, hair: value}));
                    EventManager.callServer('onHairUpdate', value);
                }}/>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>Цвет волос</div>
                <InputSlider items={hairColors}  value={customizations.hairColor} onChange={(value) => {
                    setCustomizations((prev) => ({...prev, hairColor: value}));
                    EventManager.callServer('onHairColourUpdate', value);
                }}/>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>Борода</div>
                <InputSlider items={hairColors} onChange={(value) => {
                    setCustomizations((prev) => ({...prev, hairColor: value}));
                    EventManager.callServer('onHairColourUpdate', value);
                }}/>
            </div>
        </div>
    );
};

export default Hair;