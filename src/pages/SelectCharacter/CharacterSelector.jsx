import React from "react";

import styles from './CharacterSelector.module.scss';

import Character from "../../components/CharacterSelector/Character";
import EmptySlot from "../../components/CharacterSelector/EmptySlot";
import ArrowButton from "../../components/CharacterSelector/ArrowButton";

const CharacterSelector = ({data}) => {

    const [currentItem, setCurrentItem] = React.useState(0);
    const {Login, Donate, FreeSlots, CharacterList} = JSON.parse(data);
    const characters = [
        <EmptySlot available={FreeSlots >= 1}/>,
        <EmptySlot available={FreeSlots >= 2}/>,
        <EmptySlot available={FreeSlots >= 3}/>,
        <EmptySlot available={FreeSlots >= 4}/>,
        <EmptySlot available={FreeSlots >= 5}/>
    ];
    CharacterList.forEach((character, index) => {
        characters[index] = <Character {...CharacterList[index]}/>
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.accountInfo}>
                    <div className={styles.row}>
                        <div className={styles.accountPicture}>
                            <img src="img/character-picture/acc-image.png" alt="avatar"/>
                        </div>
                        <div className="pt-5 pb-5">
                            <div className={styles.login}>
                                {Login}
                            </div>
                            <div className={styles.donate}>
                                Баланс: {Donate}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.headerTitle}><span>D</span>e<span>t</span>roi<span>t</span></div>
                <div className={styles.headerSubtitle}>Role Play</div>
            </div>
            <div className={'d-flex justify-around'}>
                <div className={styles.arrowButton}>
                    <button onClick={() => setCurrentItem((prev) => prev >= 1 ? prev - 1 : prev)}><ArrowButton direction='left'/></button>
                </div>
                {characters.map((item, index) =>
                    <div key={index}
                         className={`${currentItem === index ? styles.current : styles.hidden} ${currentItem < index ? styles.left : currentItem > index ? styles.right : ''} ${styles.characterContainer} d-flex`}>
                        {item}{item}
                    </div>)}
                <div className={styles.arrowButton}>
                    <button onClick={() => setCurrentItem((prev) => prev < characters.length - 1 ? prev + 1 : prev)}>
                        <ArrowButton/>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CharacterSelector;