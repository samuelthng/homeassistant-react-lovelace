import { useComputed } from "@preact/signals-react";
import { useRef } from "react";
import cardStates from "../cardStates";
import DataDisplay from "./DataDisplay";

export default function ConfigViewer({ cardName }: { cardName: string }) {
	const renderRef = useRef(0);
	renderRef.current++;
	const config = useComputed(() => {
		const { config } = cardStates.value[cardName];
		return config.value;
	});
	return (
		<>
			<DataDisplay label="config" data={config.value} />
			<p>Rendered: {renderRef.current}</p>
		</>
	);
}
