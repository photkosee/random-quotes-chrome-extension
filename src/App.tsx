import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    try {
      fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then((data) => setQuote(data.quote));
    } catch (error) {
      setQuote("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div
        className="bg-white py-3 px-4 flex flex-col
        gap-y-2 min-w-80 rounded-lg"
      >
        <div
          className="py-2 px-3 min-h-28 bg-white text-wrap
          text-center rounded-lg border border-neutral-700
          flex items-center justify-center"
        >
          {quote}
        </div>
        <button
          onClick={getQuote}
          className="py-2 px-3 bg-black text-white
          rounded-lg hover:bg-neutral-800"
        >
          Get Quote
        </button>
      </div>
    </>
  );
}

export default App;
