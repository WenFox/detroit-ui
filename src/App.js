import React from "react";
import './App.scss';
import 'macro-css';

import {useSelector} from "react-redux";

import EventManager from "./bridge/bridge";

window.EventManager = EventManager;

function App() {
    //const dispatch = useDispatch();
    const forms = useSelector(({forms}) => forms);
    const dialogs = useSelector(({dialogs}) => dialogs)
    return (
        <div className="App">
            {
                forms.map((form, index) => <div key={index}>{form}</div>)
            }
            {
                dialogs
            }
        </div>
    );
}

export default App;
