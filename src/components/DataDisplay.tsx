export default function DataDisplay({
	label,
	data,
}: {
	label: string;
	data: unknown;
}) {
	return (
		<div>
			<p>{label}</p>
			<pre style={{ overflowX: "auto" }}>
				<code>{JSON.stringify(data, null, 2)}</code>
			</pre>
		</div>
	);
}
