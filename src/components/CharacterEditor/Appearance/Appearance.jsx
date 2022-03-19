import React from "react";

import SimpleBarReact from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

import styles from './Appearance.module.scss';
import Filter from "./Filter";
import Characteristics from "./Characteristics";
import Hair from "./Hair";
import HeadOverlays from "./HeadOverlays";
import EventManager from "../../../bridge/bridge";

const Appearance = ({faceFeatures, setFaceFeatures, customizations, setCustomizations, gender, overlay, setOverlay}) => {
    const [tab, setTab] = React.useState(0);
    const [filter, setFilter] = React.useState(0);

    return (
        <div className={styles.appearance}>
            <div className={styles.header}>
                <div className={styles.separator}>
                    .
                </div>
                <div>
                    <button className={`${styles.item} ${tab === 0 ? styles.active : ''}`}
                            onClick={() => setTab(0)}>Характеристики
                    </button>
                </div>

                <div>
                    <button className={`${styles.item} ${tab === 1 ? styles.active : ''}`}
                            onClick={() => setTab(1)}>Вид
                    </button>
                </div>
                <div>
                    <button className={`${styles.item} ${tab === 2 ? styles.active : ''}`}
                            onClick={() => setTab(2)}>Волосы
                    </button>
                </div>
            </div>
            {tab === 0 ? <Filter filter={filter} setFilter={setFilter}/> : <div className={styles.line}></div>}
            <div className={styles.content}>
                <SimpleBarReact style={{height: '100%'}} autoHide={false}>

                        <div className={styles.content1}>
                            {
                                tab === 0 ? (<Characteristics filter={filter} faceFeatures={faceFeatures}
                                                              setFaceFeatures={setFaceFeatures}
                                                              customizations={customizations}
                                                              setCustomizations={setCustomizations}/>)
                                    :
                                    (tab === 1 ? (<HeadOverlays overlay={overlay} setOverlay={setOverlay}/>) :
                                        <Hair gender={gender} customizations={customizations}
                                              setCustomizations={setCustomizations}/>)
                            }
                        </div>

                </SimpleBarReact>
            </div>
            <div className={styles.footer}>
                <div>
                    <button onClick={() => EventManager.callServer('characterEditor.resetAppearance')}>Сброс</button>
                </div>
                <div>
                    <button onClick={() => EventManager.callServer('characterEditor.randomAppearance')}>Случайно</button>
                </div>
            </div>
        </div>
    );
}

export default Appearance;