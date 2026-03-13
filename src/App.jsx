import { useState } from "react";
import "./App.css";
import "./index.css";

import colors from "./data/colors";
import quotes from "./data/quotes";

import QuoteCard from "./components/QuoteCard";
import ButtonGroup from "./components/ButtonGroup";

function App() {
	const [quote, setQuote] = useState(quotes[0]);
	const [bgColor, setBgColor] = useState(colors[0]);
	const [copied, setCopied] = useState(false);

	const generateQuote = () => {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setQuote(randomQuote);
		setBgColor(randomColor);
	};

	const copyQuote = async () => {
		try {
			await navigator.clipboard.writeText(
				`${quote.text} — ${quote.author}`,
			);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<div className="card" style={{ backgroundColor: bgColor }}>
			<h2>Random Quote Generator</h2>
			<QuoteCard quote={quote} />
			<ButtonGroup
				onGenerateQuote={generateQuote}
				onCopyQuote={copyQuote}
			/>
			<p className="button-text" style={{ opacity: copied ? 1 : 0 }}>
				{" "}
				Quote copied! ✅{" "}
			</p>
		</div>
	);
}

export default App;
