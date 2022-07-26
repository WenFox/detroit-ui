import React from "react";
import PropTypes from "prop-types";

import styles from "./CharacterEditor.module.scss";

import Header from "./Header";
import Gender from "./Gender";
import Parent from "./Parent";
import Appearance from "./Appearance/Appearance";
import EventManager from "../../bridge/bridge";
import Clothes from "./Clothes";
import Road from "./Road/Road";
import {Loading} from "../utils";

const CharacterEditor = ({donate, login, initData}) => {

    const [page, setPage] = React.useState(0);
    const [parentData, setParentData] = React.useState({});
    const [faceFeatures, setFaceFeatures] = React.useState([]);
    const [customizations, setCustomizations] = React.useState({});
    const [gender, setGender] = React.useState(1);
    const [overlay, setOverlay] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [clothes, setClothes] = React.useState({legs: 0, shoes: 0, tops: 0, hats: 0});
    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);

    /*
        TODO: Рандом и сброс внешности персонажа
     */

    const syncCharacterEditorUI = React.useCallback((json) => {
        const data = JSON.parse(json);
        setParentData(data.parents);
        setFaceFeatures(data.faceFeatures);
        setCustomizations(data.customizations);
        setOverlay(data.overlay);
        setClothes(data.clothes);
    }, [setParentData, setFaceFeatures, setCustomizations, setOverlay, setClothes]);

    const setIsLoadingFromClient = React.useCallback((loading) => {
        setIsLoading(loading);
    }, [setIsLoading]);

    React.useEffect(() => {
        const data = JSON.parse(initData);
        setParentData(data.parents);
        setFaceFeatures(data.faceFeatures);
        setCustomizations(data.customizations);
        setOverlay(data.overlay);
        setClothes(data.clothes);
    }, [initData]);

    React.useEffect(() => {
        EventManager.on('characterEditor.syncCharacterEditorUI', syncCharacterEditorUI);
        EventManager.on('characterEditor.setIsLoading', setIsLoadingFromClient);
        return () => {
            EventManager.remove('characterEditor.syncCharacterEditorUI', syncCharacterEditorUI);
            EventManager.on('characterEditor.setIsLoading', setIsLoadingFromClient);
        }



    }, [syncCharacterEditorUI, setIsLoadingFromClient]);


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
            case 3:
                return <Clothes gender={gender} clothes={clothes} setClothes={setClothes}/>
            case 4: return <Road fistName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}/>
            default :
                return null;
        }
    }
    const onNextPageClick = () => {
        if(page < 4)
        {
            setPage((oldPage) => ++oldPage)
        }
        else {
            //TODO:Загрузка во время проверки!
            setIsLoading(true);
            const regex = new RegExp("[A-Z][a-z]{3,10}");
            /*if(!regex.test(firstName))
            {
                alert("Имя должно начинаться с заглавной буквы");
            }*/
            EventManager.callServer('characterEditor.checkAvailableName', firstName, lastName);
        }

    }
    //TODO:Добавить тень SVG и плавную анимацию
    return (
        <div className={styles.wrapper}>
            {
                isLoading && <Loading/>
            }
            <Header donate={donate} login={login} page={page} setPage={setPage}/>
            {getCurrentPage()}
            {
                page !== 0 && <button className={styles.nextButton} onClick={onNextPageClick}>
                <span>
                    {page < 4 ?  "Далее" : "Создать"}

                </span>
                    <svg width="27" height="56" viewBox="0 0 27 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.5999 30.2L13.7 55.4H1.69995L13.4 30.2C14 28.8 14 27.2 13.4 25.8L1.69995 0.600006H13.7L25.5999 25.8C26.2999 27.2 26.2999 28.9 25.5999 30.2Z"
                            stroke="#00C8FF" strokeMiterlimit="10"/>
                    </svg>

                </button>
            }

        </div>
    );
}

export default CharacterEditor;

CharacterEditor.propTypes = {
    logo: PropTypes.string,
    login: PropTypes.string.isRequired,
    donate: PropTypes.number.isRequired,
};