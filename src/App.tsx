/* eslint-disable @typescript-eslint/no-namespace */
import React, { useRef } from "react";
import { ReactCardProps } from "./utilities/createReactCard";
import StateViewer from "./components/StateViewer";
import ConfigViewer from "./components/ConfigViewer";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"ha-card": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>;
		}
	}
}

function App({ cardName }: ReactCardProps) {
	const renderRef = useRef(0);
	renderRef.current++;

	return (
		<ha-card style={{ padding: "1rem" }}>
			<p>{cardName}</p>
			<p>Rendered: {renderRef.current}</p>
			<StateViewer cardName={cardName} />
			<ConfigViewer cardName={cardName} />
		</ha-card>
	);
}

export default App;
