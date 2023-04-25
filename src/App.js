import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faQuestion,
  faThumbsUp,
  faThumbsDown,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { MipsDecisionTree } from "./components";
import { Button } from "@trussworks/react-uswds";

import "@trussworks/react-uswds/lib/index.css";
import "@trussworks/react-uswds/lib/uswds.css";
import "./App.css";

library.add(faQuestion, faThumbsUp, faThumbsDown, faCheck, faTimes);

const triggerSurvey = (window) => {
  window.hj("event", "intercept-survey-quality-submit");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HotJar Testing - Prototype UI</h1>
      </header>
      <main>
        <p>
          This site is currently used for HotJar testing and demos. It is not
          intended for government use.
        </p>
        {/*<div style={{ marginTop: "2rem" }}>
          <Button
            big
            outline
            className="qpp-dt-btn-action"
            onClick={() => triggerSurvey(window)}
          >
            Test Event Driven Survey
          </Button>
        </div>*/}
        {/*<MipsDecisionTree />*/}
      </main>
    </div>
  );
}

export default App;
