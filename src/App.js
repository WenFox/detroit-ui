import React from "react";
import './App.scss';
import 'macro-css';

import {useSelector, useDispatch} from "react-redux";

import Authorization from "./pages/Authorization";
import CharacterSelector from "./pages/SelectCharacter/CharacterSelector";
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
        {/*<CharacterSelector/>*/}
    </div>
  );
}

export default App;
