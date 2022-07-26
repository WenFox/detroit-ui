import React from "react";

import Card from './Card'
import styles from './Road.module.scss';

const Road = ({fistName, setFirstName, lastName, setLastName}) => {

    return (
        <div className={styles.road}>
            <div className={styles.cards}>
                <Card title="Кочевник"></Card>
                <Card title="Скоро" isDisable ></Card>
                <Card title="Скоро" isDisable></Card>
            </div>
            <div className={styles.nick}>
                <p>Выберите ваш начальный жизненный путь<br/>и введите имя персонажа</p>
                <div className={styles.input}>
                    <input type="text" maxLength={14} placeholder="Имя" value={fistName} onChange={(event) => setFirstName(event.currentTarget.value)}/>
                    <div className={styles.delimiter}></div>
                    <input type="text" maxLength={14} placeholder="Фамилия" value={lastName} onChange={(event) => setLastName(event.currentTarget.value)}/>
                </div>
            </div>

        </div>
    );
};

export default Road;