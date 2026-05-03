// Load favorite words from localStorage.
// If nothing is saved yet, starts with an empty array.
let favorites = JSON.parse(localStorage.getItem("favWords")) || []
// Get DOM elements
const form = document.getElementById("form")
const input = document.getElementById("input")
const result = document.getElementById("result")
const error = document.getElementById("error")
const clearBtn = document.getElementById("clearBtn")
const favList = document.getElementById("favList")


//Favourites dislplay function
function renderFavorites() {

  // clears old list before re-rendering
  favList.innerHTML = "";

  // loops through favorites array
  favorites.forEach(word => {

    // adds each word to the list
    favList.innerHTML += `
      <li>
        ${word}
        <button class="remove-fav"
                data-word="${word}">
          ×
        </button>
      </li>
    `;
  });
}

//clears searches
  clearBtn.addEventListener("click", function () {
  input.value = "";
  result.innerHTML = "";
  error.textContent = "";
});


// event listener for form submission
form.addEventListener("submit", async function (e) {
  e.preventDefault();


 
  // get user input that is word to be sent to API
  const word = input.value.trim();

  // reset UI
  result.innerHTML = "";
  error.textContent = "";

  // validation checks if a word was typed
  if (word === "") {
    error.textContent = "Please enter a word";
    return;
  }

  try {
    // fetch API request (WAIT for response)
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    // checking for response
    if (!res.ok) {
      throw new Error("Word not found");
    }

    // convert to JS object (WAIT for JSON)
    const data = await res.json();

    const wordData = data[0]

     const audioUrl = wordData.phonetics?.find(p => p.audio)?.audio;


    
    const pronunciation =
      wordData.phonetic || "No pronunciation available";

    const synonyms =
      wordData.meanings?.[0]?.synonyms?.join(", ") ||
      "No synonyms found";

    // Shows results
    result.innerHTML = `
      <h2>${wordData.word}</h2>
      <p><strong>Pronunciation:</strong> ${pronunciation}</p>
      <p>${wordData.meanings[0].definitions[0].definition}</p>
      <p><strong>Synonyms:</strong> ${synonyms}</p>
       <button class="fav-btn" data-word="${wordData.word}">
        ${favorites.includes(wordData.word) ? "⭐" : "☆"}
      </button>
        <button id="audioBtn">🔊 Play Audio</button>

    `;
 if (audioUrl) {
      document.getElementById("audioBtn").addEventListener("click", function () {
        new Audio(audioUrl).play();
      });
    } else {
      document.getElementById("audioBtn").addEventListener("click", function () {
        alert("No audio available for this word");
      });
    }

  } catch (err) {
      //deals with errors
    error.textContent = err.message;
  }
});

// show saved favorites when page loads
renderFavorites();

document.addEventListener("click", function (e) {

  // add/remove favorite from search result
  if (e.target.classList.contains("fav-btn")) {

    const word = e.target.dataset.word;

    if (!favorites.includes(word)) {
      favorites.push(word);
    } else {
      favorites = favorites.filter(f => f !== word);
    }

    localStorage.setItem("favWords", JSON.stringify(favorites));

    e.target.textContent =
      favorites.includes(word) ? "⭐" : "☆";

    renderFavorites();
  }

  // remove from favorites list
  if (e.target.classList.contains("remove-fav")) {

    const word = e.target.dataset.word;

    favorites = favorites.filter(f => f !== word);

    localStorage.setItem("favWords", JSON.stringify(favorites));

    renderFavorites();
  }

});


