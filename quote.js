const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const moodSelect = document.getElementById("mood");
const container = document.getElementById("quote-container");

// API URLs by mood
const apiURLs = {
  inspirational: "//api.quotable.io/random?tags=inspirational",
  funny: "//api.quotable.io/random?tags=humorous",
  life: "//api.quotable.io/random?tags=life",
  love: "//api.quotable.io/random?tags=love",
  technology: "//api.quotable.io/random?tags=technology",
  happy: "//api.quotable.io/random?tags=happiness",
  sad: "//api.quotable.io/random?tags=sadness"
};

// Fetch random quote
async function getQuote() {
  const mood = moodSelect.value;
  const url = apiURLs[mood];

  try {
    const response = await fetch(url);
    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `- ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Oops! Couldn't fetch quote. Try again.";
    authorText.textContent = "";
  }
}

// Read the current quote aloud
function readQuote() {
  const textToRead = `${quoteText.textContent} ${authorText.textContent}`;
  let speech = new SpeechSynthesisUtterance(textToRead);
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

// Get quote on button click
newQuoteBtn.addEventListener("click", getQuote);

const readBtn = document.getElementById("read-quote");
if (readBtn) {
  readBtn.addEventListener("click", readQuote);
}

// Mood change listener
moodSelect.addEventListener("change", () => {
  const moods = ["inspirational","funny","life","love","technology","happy","sad"];

  container.classList.remove(...moods);
  container.classList.add(moodSelect.value);

  document.body.classList.remove(...moods);
  document.body.classList.add(moodSelect.value);
});