import constants from "../constants";
import Authorization from "../../pages/Authorization";
import CharacterSelector from "../../pages/SelectCharacter/CharacterSelector";


export const setForm = (formName) => ({
    type: constants.SET_FORM,
    payload: formName
});

export const showAuthorization = () => ({
   type: constants.SET_FORM,
   payload: <Authorization/>
});

export const showCharacterSelector = (data) => ({
   type: constants.SET_FORM,
   payload: <CharacterSelector data={data}/>
});

export const hideAuthorization = () => ({
   type: constants.HIDE_CHARACTER_SELECTOR,
    payload: ''
});