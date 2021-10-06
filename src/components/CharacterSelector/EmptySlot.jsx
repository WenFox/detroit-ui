import styles from "./Character.module.scss";
import EventManager from "../../bridge/bridge";

const EmptySlot = ({available}) =>{
    return (
        <div className={`${styles.characterSlot} ${!available && styles.unavailableSlot}`}>
            <div className={styles.container}>
                <div className={available ? styles.slotFree : styles.slotClose}>
                    {
                        available ? (
                            <div className={styles.title}>Свободный<br/> Слот</div>
                        ) : (
                            <div className={styles.closeTitle}>Закрытый<br/> Слот</div>
                        )
                    }
                    {
                        available ? (
                            <div className={styles.info}>
                                У вас есть свободный слот для создания персонажа.<br/>
                                Вы можете создать нового персонажа прямо сейчас, нажав кнопку "Создать".
                            </div>
                        ) : (
                            <div className={styles.info}>
                                Вы можете приобрести дополнительный слот для <br/> персонажа за 1000 DetroitPoints
                            </div>
                        )
                    }
                </div>
                <div className={styles.create}>
                    {
                        available ? (
                            <button onClick={() => EventManager.callServer('newCharacter')}>
                                <div className={styles.createButton}>Создать</div>
                            </button>
                        ) : (
                            <button>
                                <div className={styles.createButton}>Купить</div>
                            </button>
                        )
                    }

                </div>
            </div>
        </div>
    );
}
export default EmptySlot;