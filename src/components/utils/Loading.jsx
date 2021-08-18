import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.logotype}>
                <img src="img/logo/1.png" alt=""/>
                <img src="img/logo/2.png" alt=""/>
                <img src="img/logo/3.png" alt=""/>
            </div>
        </div>
    );
}

export default Loading;