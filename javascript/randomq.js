
document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "“Baking is love made visible.”",
    "“Good food is the foundation of genuine happiness.”",
    "“Life is what you bake of it.”",
    "“Count the memories, not the calories.”",
    "“Bake the world a better place.”"
  ];

  const getQuoteButton = document.querySelector("#getQuoteButton");
  const quoteDisplay = document.querySelector("#quoteDisplay");

  getQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = randomQuote;
  });
});

let isVisible = true; // Track visibility state

function toggleVisibility() {
  const div = document.getElementById('toggleDiv');

  if (isVisible) {
    div.style.opacity = '0';
    div.style.maxHeight = '0';  // Collapses the div
    div.style.padding = '0';
  } else {
    div.style.opacity = '1';
    div.style.maxHeight = '200px';  // Set to a reasonable max height
    div.style.padding = '20px';
  }

  isVisible = !isVisible;  
}

// Attach the event listener to the button
document.getElementById('toggleVisibilityButton').addEventListener('click', toggleVisibility);

