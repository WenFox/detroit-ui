import React from "react";
import {useWindowWidth} from "@react-hook/window-size";

import styles from './CharacterSelector.module.scss';

import EventManager from "../../bridge/bridge";
import Character from "../../components/CharacterSelector/Character";
import EmptySlot from "../../components/CharacterSelector/EmptySlot";
import ArrowButton from "../../components/CharacterSelector/ArrowButton";
import {Loading} from "../../components/utils";
import AccountInfo from "../../components/AccountInfo";

//TODO:Оптимизация ре-рендеров (например при сдвиге слайдера!);
const CharacterSelector = ({data}) => {

    const displayWidth = useWindowWidth();
    const characterPageCount = displayWidth >= 1300 ? 3 : displayWidth > 900 ? 2 : 1;
    const [currentItem, setCurrentItem] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);

    const setCharacterLoading = React.useCallback((state) => {
        setIsLoading(state);
    }, []);

    React.useEffect(() => {
        EventManager.on('setCharacterLoading', setCharacterLoading);
        return () => (EventManager.remove('setCharacterLoading', setCharacterLoading));
    }, [setCharacterLoading]);

    const {Login, Donate, FreeSlots, CharacterList} = JSON.parse(data);
    const characters = [
        <EmptySlot key={1} available={FreeSlots >= 1}/>,
        <EmptySlot key={2} available={FreeSlots >= 2}/>,
        <EmptySlot key={3} available={FreeSlots >= 3}/>,
        <EmptySlot key={4} available={FreeSlots >= 4}/>,
        <EmptySlot key={5} available={FreeSlots >= 5}/>,
        <EmptySlot key={6} available={FreeSlots >= 6}/>
    ];
    CharacterList.forEach((character, index) => {
        characters[index] = <Character {...CharacterList[index]} key={character.Name}/>
    });
    const chunks = characters.reduce((chunks, value, index) => {
        const chunkIndex = Math.floor(index / characterPageCount);
        if (!chunks[chunkIndex]) {
            chunks[chunkIndex] = [];
        }
        chunks[chunkIndex].push(value);
        return chunks;
    }, []);

    return (
        <div className={styles.wrapper}>
            {
                isLoading && <Loading/>
            }
            <div className={styles.header}>
                <div className={styles.loginPanel}>
                    <AccountInfo login={Login} donate={Donate}/>
                </div>
                <div className={styles.headerTitle}><span>D</span>e<span>t</span>roi<span>t</span></div>
                <div className={styles.headerSubtitle}>Role Play</div>
            </div>
            <div className={'d-flex justify-around'}>
                <div className={styles.arrowButton}>
                    <button onClick={() => setCurrentItem((prev) => prev >= 1 ? prev - 1 : prev)}><ArrowButton
                        direction='left'/></button>
                </div>
                {chunks.map((item, index) =>
                    <div key={index}
                         className={`${currentItem === index ? styles.current : styles.hidden} ${currentItem < index ? styles.left : currentItem > index ? styles.right : ''} ${styles.characterContainer} d-flex`}>
                        {item}
                    </div>)}
                <div className={styles.arrowButton}>
                    <button onClick={() => setCurrentItem((prev) => prev < chunks.length - 1 ? prev + 1 : prev)}>
                        <ArrowButton/>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CharacterSelector;