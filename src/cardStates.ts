import { signal } from "@preact/signals-react";
import { ReactCardProps } from "./utilities/createReactCard";
const cardStates = signal<{ [cardName: string]: ReactCardProps }>({});
export default cardStates;
