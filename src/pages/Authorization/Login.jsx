import React from "react";

import styles from "./Login.module.scss";
import {Input} from '../../components/utils';

import EventManager from '../../bridge/bridge';

const Login = ({showReg}) => {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const onChangeInput = (e) => {
        switch (e.currentTarget.name) {
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
    };


    const setAuthState = React.useCallback((status, message) => {
        setIsLoading(false);
        if (status) {

        } else {
            setMessage(message);
        }
    }, []);

    React.useEffect(() => {

        EventManager.on('setAuthState', setAuthState);

        return () => (EventManager.remove('setAuthState', setAuthState));
    }, [setAuthState]);


    const onClickLoginButton = () => {
        setIsLoading(true);
        EventManager.callServer('loginPlayer', login, password);
    };

    return (
        <div className={styles.loginPanel}>
            <div className={styles.header}>
                <h1><span>D</span>E<span>T</span>ROI<span>T</span></h1>
                <h2>ROLE PLAY</h2>
                <h3>Будущее уже наступило</h3>
            </div>
            <div className={styles.errorMessage}>
                {message}
            </div>
            <div className={styles.panel}>
                <div className={styles.panelContent}>
                    <Input name={'login'} inputValue={login} onChangeValue={onChangeInput} title={"Логин"}
                           placeholder={"Введите свой логин"}/>
                    <Input name={'password'} inputValue={password} onChangeValue={onChangeInput} title={"Пароль"}
                           placeholder={"Введите свой пароль"}
                           type={"password"}/>
                    <div className={`${styles.logotype} ${isLoading ? styles.animated : ''}`}>
                        <img src="img/logo/1.png" alt=""/>
                        <img src="img/logo/2.png" alt=""/>
                        <img src="img/logo/3.png" alt=""/>
                    </div>
                </div>
                <div className={styles.version}>
                    066.3
                </div>
            </div>
            <div className={styles.links}>
                <div className="text-center">
                    <button disabled={isLoading} className={styles.authButton} onClick={onClickLoginButton}>Войти
                    </button>
                </div>
                <button disabled={isLoading} className={styles.linksBtn} onClick={showReg}>Регистрация</button>
                <button disabled={isLoading} className={styles.linksBtn}>Забыли пароль?</button>
            </div>
        </div>

    );
}
export default Login;