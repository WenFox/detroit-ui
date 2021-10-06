import React from "react";
import PropTypes from "prop-types";

import styles from "./CharacterEditor.module.scss";

import Header from "./Header";
import Gender from "./Gender";
import Parent from "./Parent";
import Appearance from "./Appearance/Appearance";

const CharacterEditor = ({donate, login, initData}) => {

    const [page, setPage] = React.useState(0);
    const [parentData, setParentData] = React.useState({});
    const [faceFeatures, setFaceFeatures] = React.useState([]);
    const [customizations, setCustomizations] = React.useState({});


    React.useEffect(() => {
        const data = JSON.parse(initData);
        setParentData(data.parents);
        setFaceFeatures(data.faceFeatures);
        setCustomizations(data.customizations);
    }, [initData]);

    const getCurrentPage = () => {
        switch (page)
        {
            case 0: return <Gender setPage={setPage}/>;
            case 1: return <Parent parentsData={parentData} setParentData={setParentData}/>
            case 2: return <Appearance faceFeatures={faceFeatures} setFaceFeatures={setFaceFeatures} customizations={customizations} setCustomizations={setCustomizations}/>
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