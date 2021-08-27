import React from "react";
import styles from "./AccountInfo.module.scss";
import PropTypes from "prop-types";

const AccountInfo = ({login, donate, logo}) => {
    return (
        <div className={styles.accountInfo}>
            <div className={styles.row}>
                <div className={styles.accountPicture}>
                    <img src="img/character-picture/acc-image.png" alt="avatar"/>
                </div>
                <div className="pt-5 pb-5">
                    <div className={styles.login}>
                        {login}
                    </div>
                    <div className={styles.donate}>
                        Баланс: {donate}
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