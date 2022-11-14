// UI items
const searchInput = document.querySelector("#search"),
  suggestionsList = document.querySelector(".suggestions");

// Event listeners
searchInput.addEventListener("keyup", getSuggestions);

// Functions
function getSuggestions() {
  const searchValue = searchInput.value;
  const url = `https://api.datamuse.com/sug?s=${searchValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displaySuggestions(data);
    });
}

function displaySuggestions(data) {
  const suggestions = data.map((item) => {
    return `<li>${item.word}</li>`;
  });
  suggestionsList.innerHTML = suggestions.slice(0, 5).join("");
}
