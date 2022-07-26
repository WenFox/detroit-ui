import PropTypes from 'prop-types';

import styles from './Character.module.scss'
import Label from "../utils/Label";
import btnDelete from "../../assets/img/LoginPanel/character-selector/btn_delete.svg"
import EventManager from "../../bridge/bridge";

const Character = ({Name, LastLogin, Level, BankMoney, Money, Exp, Faction, Job, PlayTime, Rang}) => {

    const deleteCharacter = () => {
        EventManager.callServer('deleteCharacter', Name);
    }

    return (
        <div className={styles.characterSlot}>
            <div className={styles.container}>
                <div className={styles.characterName}>
                    {Name}
                </div>
                <div className={styles.mainInfo}>
                    <div className={styles.photo}>
                        <img src='img/character-picture/character_photo.png' alt="user"/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <Label text="Последний вход" value={LastLogin}/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Уровень" value={Level}/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Время в игре" value={Math.round(PlayTime/60) + ' часов'}/>
                        </div>
                    </div>
                </div>
                <div className={styles.about}>
                    <div className={styles.leftColumn}>
                        <div className={styles.item}>
                            <Label text="Счет в банке" value={'$' + BankMoney}/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Наличка" value={'$' + Money}/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Опыт" value={Exp}/>
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.item}>
                            <Label text="Фракция" value={Faction}/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Работа" value={Job}/>
                        </div>
                        <div className={styles.item}>
                            <Label text="Ранг" value={Rang}/>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.delete}>
                        <button onClick={deleteCharacter}><img src={btnDelete} alt="delete"/></button>
                    </div>
                    <div className={styles.play}>
                        <button onClick={() => {
                            EventManager.call('CharacterSelector.setCharacterLoading', true);
                            EventManager.callServer('startPlayAtCharacter', Name);
                        }}>
                            <div className={styles.createButton}>Играть</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Character.propTypes = {
    Name: PropTypes.string,
    LastLogin: PropTypes.string,
    Level: PropTypes.number,
    BankMoney: PropTypes.number,
    Money: PropTypes.number,
    Exp: PropTypes.number,
    Faction: PropTypes.string,
    Rang: PropTypes.string,
    Job: PropTypes.string,
    PlayTime: PropTypes.number
};

Character.defaultProps = {
    Name: 'Nick Name',
    LastLogin: 'Никогда',
    Level: 1,
    BankMoney: 0,
    Money: 0,
    Exp: 1,
    Faction: 0,
    Job: 0,
    PlayTime: 0
}

export default Character;