import React from "react";
import PropTypes from "prop-types";

import styles from "./CharacterEditor.module.scss";

import Header from "./Header";
import Gender from "./Gender";
import Parent from "./Parent";
import Appearance from "./Appearance/Appearance";
import EventManager from "../../bridge/bridge";

const CharacterEditor = ({donate, login, initData}) => {

    const [page, setPage] = React.useState(0);
    const [parentData, setParentData] = React.useState({});
    const [faceFeatures, setFaceFeatures] = React.useState([]);
    const [customizations, setCustomizations] = React.useState({});
    const [gender, setGender] = React.useState(1);
    const [overlay, setOverlay] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    /*
        TODO: Рандом и сброс внешности персонажа
     */

    const SyncCharacterEditorUI = React.useCallback((json) => {
        const data = JSON.parse(json);
        setParentData(data.parents);
        setFaceFeatures(data.faceFeatures);
        setCustomizations(data.customizations);
        setOverlay(data.overlay);
    }, [setParentData, setFaceFeatures, setCustomizations, setOverlay]);

    React.useEffect(() => {
        const data = JSON.parse(initData);
        setParentData(data.parents);
        setFaceFeatures(data.faceFeatures);
        setCustomizations(data.customizations);
        setOverlay(data.overlay);
    }, [initData]);

    React.useEffect(() => {
        EventManager.on('SyncCharacterEditorUI', SyncCharacterEditorUI);
        return EventManager.remove('SyncCharacterEditorUI', SyncCharacterEditorUI);
    }, [SyncCharacterEditorUI]);

    const getCurrentPage = () => {
        switch (page) {
            case 0:
                return <Gender setPage={setPage} setGender={setGender}/>;
            case 1:
                return <Parent parentsData={parentData} setParentData={setParentData}/>
            case 2:
                return <Appearance faceFeatures={faceFeatures} setFaceFeatures={setFaceFeatures}
                                   customizations={customizations} setCustomizations={setCustomizations} gender={gender}
                                   setOverlay={setOverlay} overlay={overlay}/>
            default :
                return null;
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