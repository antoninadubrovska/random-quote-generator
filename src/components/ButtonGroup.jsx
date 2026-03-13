function ButtonGroup({ onGenerateQuote, onCopyQuote }) {
	return (
		<div className="buttons-container">
			<button onClick={onGenerateQuote}>New Quote</button>
			<button onClick={onCopyQuote}>Copy Quote</button>
		</div>
	);
}

export default ButtonGroup;
