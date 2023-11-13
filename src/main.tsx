// import React from "react";
// import ReactDOM from "react-dom/client";
// import { signal } from "@preact/signals-react";
import App from "./App.tsx";
import "./index.css";
import registerCard from "./utilities/registerCard.ts";

registerCard("react-card", App);
registerCard("react-card-editor", () => <div>Editor</div>);
