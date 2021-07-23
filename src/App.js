import React from "react";
import './App.scss';
import 'macro-css';

import Authorization from "./pages/Authorization";
import CharacterSelector from "./pages/SelectCharacter/CharacterSelector";


function App() {
  return (
    <div className="App">
      {/*<Authorization/>*/}
        <CharacterSelector/>
    </div>
  );
}

export default App;
