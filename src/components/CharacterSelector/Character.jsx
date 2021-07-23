import styles from './Character.module.scss'
import Label from "../utils/Label";
import btnDelete from "../../assets/img/LoginPanel/character-selector/btn_delete.svg"

const Character = ({character}) => {

    return (
        <div className={styles.characterSlot}>
            <div className={styles.container}>
                <div className={styles.characterName}>
                    Alex Morales
                </div>
                <div className={styles.mainInfo}>
                    <div className={styles.photo}>
                        <img src='img/character-picture/character_photo.png' alt="user"/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <Label text="Последний вход" value="11.11.2021"/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Уровень" value="25"/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Время в игре" value="1242 часов"/>
                        </div>
                    </div>
                </div>
                <div className={styles.about}>
                    <div className={styles.leftColumn}>
                        <div className={styles.item}>
                            <Label text="Счет в банке" value="$135445542"/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Наличка" value="$1355542"/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Опыт" value="9/12"/>
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.item}>
                            <Label text="Фракция" value="LSPD"/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Работа" value="Безработный"/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Дата создания" value="10.11.2021"/>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.delete}>
                        <button><img src={btnDelete} alt="delete"/></button>
                        {/*<a href="#"></a>*/}
                    </div>
                    <div className={styles.play}>
                        <button>
                            <div className={styles.createButton}>Играть</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Character;