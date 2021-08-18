import React from "react";
import './App.scss';
import 'macro-css';

import {useSelector} from "react-redux";

import EventManager from "./bridge/bridge";
import {Loading} from "./components/utils";

window.EventManager = EventManager;

function App() {
    //const dispatch = useDispatch();
    const forms = useSelector(({forms}) => forms);
    const dialogs = useSelector(({dialogs}) => dialogs)
    const isLoading = useSelector(({loading}) => loading);
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
