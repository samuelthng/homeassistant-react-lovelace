import App from "./App.tsx";
import registerCard from "./utilities/registerCard.ts";

registerCard("react-card", App);
registerCard("react-card-editor", () => <div>Editor</div>);
