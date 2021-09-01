import React from "react";
import PropTypes from "prop-types";

import styles from "./CharacterEditor.module.scss";

import Header from "./Header";
import Gender from "./Gender";


const CharacterEditor = ({donate, login}) => {

    const [page, setPage] = React.useState(0);

    const getCurrentPage = () => {
        switch (page)
        {
            case 0: return <Gender/>;
            default : return null;
        }
    }

    return (
        <div className={styles.wrapper}>
            <Header donate={donate} login={login} page={page} setPage={setPage}/>
            {getCurrentPage()}
        </div>
    );
}

export default CharacterEditor;

CharacterEditor.propTypes = {
    logo: PropTypes.string,
    login: PropTypes.string.isRequired,
    donate: PropTypes.number.isRequired,
};