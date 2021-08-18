import React from "react";


import styles from './Register.module.scss';

import {Input, Loading} from '../../components/utils';
import EventManager from "../../bridge/bridge";

const Register = ({showLogin}) => {

    const [errorText, setErrorText] = React.useState('');
    const [step, setStep] = React.useState(1);
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [emailCode, setEmailCode] = React.useState('');
    const [promoCode, setPromoCode] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [regErrors, setRegErrors] = React.useState({
        login: false,
        password: false,
        rePassword: false,
        mail: false,
        mailCode: false
    });


    const showRegisterError = React.useCallback((message, field) => {
        setErrorText(message);
    }, []);


    React.useEffect(() => {
        EventManager.on('showRegisterError', showRegisterError);
        EventManager.on('setRegisterLoading', setIsLoading);
        return () => {
            EventManager.remove('showRegisterError', showRegisterError);
            EventManager.remove('setRegisterLoading', setIsLoading);
        };
    }, [showRegisterError, setIsLoading]);

    const onChangeInput = (e) => {
        switch (e.currentTarget.name) {
            case 'login': {
                setLogin(e.currentTarget.value);
                if (regErrors.login)
                    regErrors.login = false;
                break;
            }
            case 'password': {
                setPassword(e.currentTarget.value);
                if (regErrors.password)
                    regErrors.password = false;
                break;
            }
            case 'rePassword': {
                setRePassword(e.currentTarget.value);
                if (regErrors.rePassword)
                    regErrors.rePassword = false;
                break;
            }
            case 'mail': {
                setMail(e.currentTarget.value);
                if (regErrors.mail)
                    regErrors.mail = false;
                break;
            }
            case 'promoCode': {
                setPromoCode(e.currentTarget.value);
                break;
            }
            case 'mailCode': {
                setEmailCode(e.currentTarget.value);
                break;
            }
            default: {
                break;
            }
        }
    }
    const onClickRegisterButton = () => {
        const loginRegex = /^[a-zA-Z]+([-_]?[a-zA-Z0-9]+){3,15}$/;
        const mailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        let flag = false
        let errors = {
            login: false,
            password: false,
            rePassword: false,
            mail: false,
            mailCode: false
        }
        if (!loginRegex.test(login)) {
            errors.login = true;
            flag = true;
        }
        if (!mailRegex.test(mail)) {
            errors.mail = true;
            flag = true;
        }
        if (password.length < 5 || password.length > 25) {
            errors.password = true;
            errors.rePassword = true;
            flag = true;
        } else if (password !== rePassword) {
            errors.rePassword = true;
            flag = true;
        }
        if (flag) {
            setRegErrors(errors);
            setErrorText('Следующие поля заполнены некорректно!');
            return false;
        } else {
            //setStep(2);
            //setErrorText('');
            setIsLoading(true);
            EventManager.callServer('registerAccount', login, password, mail);
            //TODO:Показ страницы ввода кода с почты и промокода
        }
    };

    return (
        <>
            {
                isLoading && <Loading/>
            }
            <div className={styles.loginPanel}>
                <div className={styles.header}>
                    <h1><span>D</span>E<span>T</span>ROI<span>T</span></h1>
                    <h2>ROLE PLAY</h2>
                </div>
                <div className={styles.registerForm}>
                    <div className={styles.registerHeader}>
                        <div className={styles.headerText}>
                            <img src="img/register/logo.png" alt=""/> Создание нового аккаунта
                        </div>
                        <div className={styles.version}>
                            066.3
                        </div>
                    </div>
                    <div className={styles.regError}>
                        {errorText}
                    </div>
                    <div className={styles.regPanel}>
                        <div className={styles.regBlock}>
                            <div className={styles.regContent}>
                                <div className={step === 1 ? styles.animatedOff : styles.animatedOn}>
                                    <Input name='login' onChangeValue={onChangeInput} inputValue={login} title='Логин'
                                           placeholder='Придумайте свой логин' error={regErrors.login}/>
                                    <Input name='mail' onChangeValue={onChangeInput} inputValue={mail}
                                           error={regErrors.mail} title={"Почта"}
                                           placeholder='Введите свой E-Mail'/>
                                </div>
                                <div className={step === 2 ? styles.animatedOff : styles.animatedOn}>
                                    <Input name='mailCode' onChangeValue={onChangeInput} inputState={emailCode}
                                           error={regErrors.mailCode}
                                           title='Код подтверждения' placeholder='Введите код с почты'/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.regBlock}>
                            <div className={styles.regContent}>
                                <div className={step === 1 ? styles.animatedOff : styles.animatedOn}>
                                    <Input name='password' onChangeValue={onChangeInput} inputValue={password}
                                           setInputValue={setPassword} title='Пароль'
                                           placeholder='Придумайте свой пароль' error={regErrors.password}
                                           type='password'/>
                                    <Input name='rePassword' onChangeValue={onChangeInput} inputValue={rePassword}
                                           setInputValue={setRePassword} error={regErrors.rePassword}
                                           title='Повторите пароль'
                                           placeholder='Повторите свой пароль'
                                           type='password'/>
                                </div>
                                <div className={step === 2 ? styles.animatedOff : styles.animatedOn}>
                                    <Input name='promoCode' onChangeValue={onChangeInput} inputValue={promoCode}
                                           setInputValue={setPromoCode} title='Промокод'
                                           placeholder='Промокод, если есть'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className="links__content">
                        <div className="text-center">
                            <button className={styles.authButton} onClick={onClickRegisterButton}>Создать
                            </button>
                        </div>
                        {
                            step === 1 ?
                                <button className={styles.linksBtn} onClick={showLogin}>У меня уже есть
                                    аккаунт</button> :
                                <button className={styles.linksBtn} onClick={() => setStep(1)}>Изменить данные</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;

