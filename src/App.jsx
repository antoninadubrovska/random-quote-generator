import { useState } from "react";
import "./App.css";
import "./index.css";

const quotes = [
  { text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
  {
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Work hard in silence, let success make the noise.",
    author: "Frank Ocean",
  },
  { text: "Your only limit is your mind.", author: "Unknown" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
];

const colors = [
  "#FADADD",
  "#C7CEEA",
  "#BCEBCB",
  "#FFF3B0",
  "#FFDAC1",
  "#D0F0FD",
  "#E0C8F0",
  "#F6E7D8",
];

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
      await navigator.clipboard.writeText(`${quote.text} — ${quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h2>Random Quote Generator</h2>

      <div className="quote-container">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">— {quote.author}</p>
      </div>

      <div className="buttons-contaner">
        <button onClick={generateQuote}>New Quote</button>
        <button onClick={copyQuote}>Copy Quote</button>
      </div>

      <p className="button-text" style={{ opacity: copied ? 1 : 0 }}>
        Quote copied! ✅
      </p>
    </div>
  );
}

export default App;
