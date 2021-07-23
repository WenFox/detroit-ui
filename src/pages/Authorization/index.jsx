import React from "react";
import styles from './Login.module.scss';
import Login from "./Login";
import Register from "./Register";
const Authorization = () => {
    const [loginPage, setLoginPage] = React.useState(true);
    const switchPage = () => {
        setLoginPage(!loginPage);
    }
    return (
        <div className={styles.wrapper}>
            {loginPage ? <Login showReg = {switchPage}/> : <Register showLogin = {switchPage}/>}
        </div>
    );
}
export default Authorization;