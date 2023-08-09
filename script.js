const localQuotes = [
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },

  {
    text: "That it will never come again is what makes life so sweet.",
    author: "Emily Dickinson",
  },

  {
    text: "The Six Golden Rules of Writing: Read, read, read, and write, write, write.",
    author: "Ernest Gaines",
  },

  {
    text: "The purpose of a writer is to keep civilization from destroying itself.",
    author: "Albert Camus",
  },

  {
    text: "A good writer possesses not only his own spirit but also the spirit of his friends.",
    author: "Friedrich Nietzsche",
  },

  {
    text: "You can always edit a bad page. You can't edit a blank page.",
    author: "Jodi Picoult",
  },

  {
    text: "Do not hoard what seems good for a later place in the book, or for another book; give it, give it all, give it now.",
    author: "Annie Dillard",
  },

  {
    text: "Tears are words that need to be written.",
    author: "Paulo Coelho",
  },

  {
    text: "One day I will find the right words, and they will be simple.",
    author: "Jack Kerouac",
  },
];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
  console.log(quote);
}

newQuoteBtn.addEventListener("click", newQuote);

newQuote();
