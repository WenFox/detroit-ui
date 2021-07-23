import React from "react";
import Character from "../../components/CharacterSelector/Character";
import styles from './CharacterSelector.module.scss';
import EmptySlot from "../../components/CharacterSelector/EmptySlot";

const CharacterSelector = () => {
    const [currentItem, setCurrentItem] = React.useState(0);
    const items = [
        <Character character=''/>,
        <EmptySlot available/>,
        <EmptySlot/>
    ];
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                {/*<div className={styles.accountInfo}>
                    <div className={styles.row}>
                        <div className={styles.accountPicture}>
                            <img src="img/character-picture/acc-image.png" alt="avatar"/>
                        </div>
                        <div className="pt-5 pb-5">
                            <div className={styles.login}>
                                ToManyLongLogin20081990
                            </div>
                            <div className={styles.donate}>
                                Баланс: 1324
                            </div>
                        </div>
                    </div>
                </div>*/}
                {/*<div className={styles.headerTitle}><span>D</span>e<span>t</span>roi<span>t</span></div>*/}
                {/*<div className={styles.headerSubtitle}>Role Play</div>*/}
            </div>
            <div className={'d-flex justify-around'}>
                <div className={styles.arrowButton}>
                    <button onClick={() => setCurrentItem((prev) => prev >= 1 ?  prev-1 : prev)}>&#10094;</button>
                </div>
                {items.map((item, index) => <div key={index} className={`${currentItem === index ? styles.current : styles.hidden} ${currentItem < index ? styles.left : currentItem > index ? styles.right : ''}`}>{item}</div>)}
                <div className={styles.arrowButton}>
                    <button onClick={() => setCurrentItem((prev) => prev < 2 ?  prev+1 : prev)}>&#10095;</button>
                </div>
            </div>
        </div>
    );
}
export default CharacterSelector;