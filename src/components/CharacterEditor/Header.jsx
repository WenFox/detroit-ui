import React from "react";
import styles from './Header.module.scss';
import AccountInfo from "../AccountInfo";
import PropTypes from "prop-types";

const Header = ({login, donate, logo, page, setPage}) => {

    const pages = [
        'Пол',
        'Родители',
        'Внешность',
        'Одежда',
        'Путь'
    ];


    return (
        <div className={styles.header}>
            <div className={styles.block}>
                <div className={styles.account}>
                    <AccountInfo donate={donate} login={login} logo={logo}/>
                </div>
            </div>
            <div className={styles.menu}>
                {
                    pages.map((item, idx) => (<button key={idx} className={`${styles.tab} ${page === idx ? styles.active : ''}`} onClick={() => setPage(idx)}>{item}</button>))
                }
            </div>
            <div className={styles.block}>
                <div className={styles.serverName}>
                    <h1><span>D</span>E<span>T</span>ROI<span>T</span></h1>
                    <h2>ROLE PLAY</h2>
                </div>
            </div>
        </div>
    );
}
export default Header;

Header.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    logo: PropTypes.string,
    login: PropTypes.string.isRequired,
    donate: PropTypes.number.isRequired,
};