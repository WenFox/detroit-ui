import React from "react";
import './App.scss';
import 'macro-css';

import {useSelector} from "react-redux";

import EventManager from "./bridge/bridge";

window.EventManager = EventManager;

function App() {
    //const dispatch = useDispatch();
    const forms = useSelector(({forms}) => forms);

    return (
        <div className="App">
            {
                forms.map((form, index) => <div key={index}>{form}</div>)
            }
            {/*<Authorization/>*/}
            {/*<CharacterSelector data={JSON.stringify({"Login":"СескеВернисьВКаноху","Donate":0,"FreeSlots":2,
        "CharacterList":[{"MySqlID":1,"Name":"El Camiro Aust eight","Level":2,"Exp":100,"Faction":'Русская мафияваыф', "Job":"Вод. автобуса","Money":1258,"BankMoney":0,"LastLogin":"26.07.2021 13:17:33","PlayTime":135, "Rang":"Padre"}]})}/>*/}
        </div>
    );
}

export default App;
