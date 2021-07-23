import React from "react";

import styles from "./Login.module.scss";
import {Input} from '../../components/utils';

const Login = ({showReg}) => {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onChangeInput = (e) => {
        switch (e.currentTarget.name)
        {
            case 'login': {
                setLogin(e.currentTarget.value);
                break;
            }
            case 'password': {
                setPassword(e.currentTarget.value);
                break;
            }
            default: {
                break;
            }
        }
    }

    const onClickLoginButton = () => {
        //TODO:Отправка запроса на сервер
    }

    return (
        <div className={styles.loginPanel}>
            <div className={styles.header}>
                <h1><span>D</span>E<span>T</span>ROI<span>T</span></h1>
                <h2>ROLE PLAY</h2>
                <h3>Будущее уже наступило</h3>
            </div>
            <div className={styles.errorMessage}>
                Неверный логин или пароль
            </div>
            <div className={styles.panel}>
                <div className={styles.panelContent}>
                    <Input name={'login'} inputValue={login} onChangeValue={onChangeInput} title={"Логин"} placeholder={"Введите свой логин"}/>
                    <div className={styles.panelPassword}>
                        <Input name={'password'} inputValue={password} onChangeValue={onChangeInput} title={"Пароль"} placeholder={"Введите свой пароль"}
                               type={"password"}/>
                    </div>
                    <div className={styles.logotype}>
                        <img src="img/logo/1.png" alt=""/>
                        <img src="img/logo/2.png" alt=""/>
                        <img src="img/logo/3.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.links}>
                <div className="text-center">
                    <button className={`${styles.authButton} mb-30`} onClick={onClickLoginButton}>Войти</button>
                </div>
                <button className={styles.linksBtn} onClick={showReg}>Регистрация</button>
                <button className={styles.linksBtn}>Забыли пароль?</button>
            </div>
        </div>

    );
}
export default Login;