import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestion, faThumbsUp, faThumbsDown, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { MipsDecisionTree } from './components'

import '@trussworks/react-uswds/lib/index.css'
import '@trussworks/react-uswds/lib/uswds.css'
import './App.css';

library.add(faQuestion, faThumbsUp, faThumbsDown, faCheck, faTimes)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MIPS Eligibility Decision Tree - Prototype UI </h1>
      </header>
      <main>
        <MipsDecisionTree />
      </main>
    </div>
  );
}

export default App;
