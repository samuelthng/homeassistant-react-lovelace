import { useComputed } from "@preact/signals-react";
import cardStates from "../cardStates";
import { useRef } from "react";

export default function StateViewer({ cardName }: { cardName: string }) {
	const renderRef = useRef(0);
	renderRef.current++;
	const state = useComputed(() => {
		const { hass, config } = cardStates.value[cardName];
		return (hass.value as any).states[(config.value as any)?.entity]?.state;
	});

	return (
		<div>
			<p>
				State: <code>{state}</code>
			</p>
			<p>Rendered: {renderRef.current}</p>
		</div>
	);
}
