import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

function render() {
  ReactDOM.render(
    <App changeContent={changeContent} state={state} />,
    document.getElementById("root")
  );
}

function changeContent(newId) {
  state.currentContent = state.contents.find(content => content.id === newId);
  render();
}

render();
