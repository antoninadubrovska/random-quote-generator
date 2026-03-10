import { useState } from "react";
import './App.css';  // <-- make sure to import App.css
import './index.css'; // optional if index.css isn't auto-imported

const quotes = [
	{ text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
	{ text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
	{ text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
	{ text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
	{ text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
	{ text: "Dream big and dare to fail.", author: "Norman Vaughan" },
	{ text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
	{ text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
	{ text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
	{ text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
	{ text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
	{ text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
	{ text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
	{ text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
	{ text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
	{ text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
	{ text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
	{ text: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
	{ text: "Your only limit is your mind.", author: "Unknown" },
	{ text: "If you can dream it, you can do it.", author: "Walt Disney" }
];

const colors = ["#FADADD","#C7CEEA","#BCEBCB","#FFF3B0","#FFDAC1","#D0F0FD","#E0C8F0","#F6E7D8"];

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

      <p className="button-text" style={{opacity: copied ? 1 : 0}}>
        Quote copied! ✅
      </p>
	  </div>

  );
}

export default App;


// // quotes — an array of predefined quotes

// // useState(quotes[0]) — sets the initial quote

// // generateQuote() — picks a random index in the array and updates the state

// // {quote} — React dynamically injects the current quote in the JSX

// // Clicking the New Quote button updates the quote instantly




// import { useState } from "react";
// import './index.css';

// // Quotes array
// const quotes = [

	// {
	// 	text: "Stay hungry. Stay foolish.",
	// 	author: "Steve Jobs"
	//   },
	//   {
	// 	text: "The best way to get started is to quit talking and begin doing.",
	// 	author: "Walt Disney"
	//   },
	//   {
	// 	text: "Don’t watch the clock; do what it does. Keep going.",
	// 	author: "Sam Levenson"
	//   },
	//   {
	// 	text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
	// 	author: "Winston Churchill"
	//   },
	//   {
	// 	text: "Opportunities don't happen. You create them.",
	// 	author: "Chris Grosser"
	//   },
	//   {
	// 	text: "Dream big and dare to fail.",
	// 	author: "Norman Vaughan"
	//   },
	//   {
	// 	text: "The future depends on what you do today.",
	// 	author: "Mahatma Gandhi"
	//   },
	//   {
	// 	text: "Action is the foundational key to all success.",
	// 	author: "Pablo Picasso"
	//   }
// ];


// const colors = [
// 	"#FADADD", // soft blush pink
// 	"#C7CEEA", // muted lavender-blue
// 	"#BCEBCB", // pale mint green
// 	"#FFF3B0", // soft butter yellow
// 	"#FFDAC1", // light peach
// 	"#D0F0FD", // powdery sky blue
// 	"#E0C8F0", // gentle lilac
// 	"#F6E7D8"  // creamy beige
//   ];

// function App() {
//   const [quote, setQuote] = useState(quotes[0]);
// 	const [bgColor, setBgColor] = useState(colors[0]);
// 	const [copied, setCopied] = useState(false); //1

// 	const generateQuote = () => {
// 		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 		const randomColor = colors[Math.floor(Math.random() * colors.length)];

// 		setQuote(randomQuote);
// 		setBgColor(randomColor);
// 	  };

//   const copyQuote = async () => {
// 	try {
// 		await navigator.clipboard.writeText(`${quote.text} — ${quote.author}`);
// 	  setCopied(true);

// 	  setTimeout(() => {
// 		setCopied(false);
// 	  }, 2000); // message disappears after 2 seconds
// 	} catch (err) {
// 	  console.error("Failed to copy:", err);
// 	}
//   };

//   return (

// // 	  <div
// //   style={{
// //     width: "620px",        // FIXED width
// //     minWidth: "320px",     // ensures mobile isn’t too small
// //     padding: "20px",
// //     // border: "2px solid #61dafb",
// //     borderRadius: "10px",
// //     backgroundColor: bgColor,
// //     textAlign: "center",
// //     fontFamily: "sans-serif",
// //     transition: "background-color 0.5s ease",
// //     boxSizing: "border-box",
// //   }}
// // >

// // <h2>Random Quote Generator</h2>

// // <div
// //   style={{
// //     minHeight: "120px",         // vertical space fixed
// //     display: "flex",
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     textAlign: "center",
// //     boxSizing: "border-box",
// //     width: "100%",           // fills the card exactly
// //   }}
// // >
// //   <p
// //     style={{
// //       fontStyle: "italic",
// //       fontSize: "1.2em",
// //       margin: 0,
// //       lineHeight: "1.5",
// //       wordBreak: "break-word",
// //     }}
// //   >
// //     "{quote.text}"
// //   </p>

// //   <p
// //     style={{
// //       marginTop: "10px",
// //       fontSize: "1em",
// //       fontWeight: "bold",
// //     }}
// //   >
// //     — {quote.author}
// //   </p>
// // </div>


// // 		  <div style={{ marginTop: "10px" }}>

// //         <button
// //           onClick={generateQuote}
// //           style={{
// //             padding: "10px 20px",
// //             fontSize: "16px",
// //             cursor: "pointer",
// //             borderRadius: "5px",
// // 			border: "1px solid #333",
// // 			backgroundColor: bgColor,     // button matches background
// // 			color: "#242424",             // text contrast
// // 			transition: "background-color 0.5s ease, color 0.5s ease"
// //           }}
// //         >
// //           New Quote
// // 		  </button>

// // 		  <button
// //   onClick={copyQuote}
// //   style={{
// //     padding: "10px 20px",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //     borderRadius: "5px",
// //     border: "1px solid #333",
// // 	  marginLeft: "10px",
// // 	  backgroundColor: bgColor,     // button matches background
// // 	  color: "#242424",             // text contrast
// // 	  transition: "background-color 0.5s ease, color 0.5s ease"
// //   }}
// // >
// //   Copy Quote
// // 			  </button>

// // 		  </div>

// // <p
// // style={{
// //   marginTop: "16px",
// //   fontSize: "14px",
// //   minHeight: "20px",   // reserves space
// //   opacity: copied ? 1 : 0,  // show/hide smoothly
// //   transition: "opacity 0.3s ease"
// // }}
// // >
// // Quote copied! ✅
// // </p>




// 	  // </div>

// 	  <div
//   style={{
//     width: "100%",
//     maxWidth: "620px",
// 			  minWidth: "320px",
// 			  //width: "clamp(320px, 90%, 620px)", // stable, responsive
//     padding: "20px",
//     borderRadius: "10px",
//     backgroundColor: bgColor,
//     textAlign: "center",
//     fontFamily: "sans-serif",
//     transition: "background-color 0.5s ease",
//     boxSizing: "border-box",
//   }}
// >
//   <h2>Random Quote Generator</h2>

//   <div
//     style={{
//       minHeight: "120px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       textAlign: "center",
//       boxSizing: "border-box",
//       width: "100%",
//     }}
//   >
//     <p
//       style={{
//         fontStyle: "italic",
//         fontSize: "1.2rem",
//         margin: 0,
//         lineHeight: "1.5",
//         wordBreak: "break-word",
//       }}
//     >
//       "{quote.text}"
//     </p>

//     <p
//       style={{
//         marginTop: "10px",
//         fontSize: "1rem",
//         fontWeight: "bold",
//       }}
//     >
//       — {quote.author}
//     </p>
//   </div>

//   <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
//     <button
//       onClick={generateQuote}
//       style={{
//         padding: "10px 20px",
//         fontSize: "16px",
//         cursor: "pointer",
//         borderRadius: "5px",
//         border: "1px solid #333",
//         backgroundColor: bgColor,
//         color: "#242424",
//         transition: "background-color 0.5s ease, color 0.5s ease",
//       }}
//     >
//       New Quote
//     </button>

//     <button
//       onClick={copyQuote}
//       style={{
//         padding: "10px 20px",
//         fontSize: "16px",
//         cursor: "pointer",
//         borderRadius: "5px",
//         border: "1px solid #333",
//         backgroundColor: bgColor,
//         color: "#242424",
//         transition: "background-color 0.5s ease, color 0.5s ease",
//       }}
//     >
//       Copy Quote
//     </button>
//   </div>

//   <p
//     style={{
//       marginTop: "16px",
//       fontSize: "14px",
//       minHeight: "20px",
//       opacity: copied ? 1 : 0,
//       transition: "opacity 0.3s ease",
//     }}
//   >
//     Quote copied! ✅
//   </p>
// </div>
//   );
// }

// export default App;


