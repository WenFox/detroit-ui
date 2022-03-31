import React from "react";
import styles from "./AccountInfo.module.scss";
import PropTypes from "prop-types";

import donateIcon from '../assets/img/LoginPanel/character-selector/donate.png'

const AccountInfo = ({login, donate, logo}) => {
    return (
        <div className={styles.accountInfo}>
            <div className={styles.row}>
                <div className={styles.accountPicture}>
                    <img src="img/character-picture/acc-image.png" alt="avatar"/>
                </div>
                <div>
                    <div className={styles.login}>
                        {login}
                    </div>
                    <div className={styles.donate}>
                        <span>Баланс: {donate}</span>
                        <img src={donateIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfo;

AccountInfo.propTypes = {
    login: PropTypes.string.isRequired,
    logo: PropTypes.string,
    donate: PropTypes.number.isRequired,
};