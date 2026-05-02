# WordSearch App – Single Page Dictionary Application

WordSearch App is a Single Page Application (SPA) that allows users to search for English words and view definitions, pronunciation, synonyms, and audio pronunciation. Users can also save favorite words using local storage for later reference.

---

## Features

- Search for English word definitions using a Dictionary API  
- View meanings, pronunciation, and synonyms  
- Play pronunciation audio (when available)  
- Save and remove favorite words  
- Persistent storage using localStorage  
- Clear search results without reloading the page  
- Fully dynamic single-page application (SPA)  

---

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Fetch API  
- Async / Await  
- LocalStorage API  

---

## API Used

This project uses the Free Dictionary API:

https://api.dictionaryapi.dev/

The API provides:
- Word definitions  
- Pronunciation data  
- Phonetic audio  
- Synonyms  

---

## How It Works

1. The user enters a word into the search bar  
2. The application sends a request to the Dictionary API  
3. The API returns word data (definitions, pronunciation, etc.)  
4. The page updates dynamically without reloading  
5. Users can:
   - Save words to favorites  
   - Play pronunciation audio  
   - Clear search results  

---

## Favorites Feature

- Users can add words to a favorites list  
- Favorites are stored in localStorage  
- Data persists even after refreshing the page  
- Users can remove words from favorites at any time  

---

## Audio Feature

- Some words include pronunciation audio from the API  
- Users can play audio directly in the app  
- If audio is unavailable, the feature is disabled gracefully  

---

## Responsive Design

The app is fully responsive and adapts to:
- Mobile devices
- Tablets
- Desktop screens

---

## Future Improvements

- Display favorites list more visually (cards or layout improvements)  
- Add dark mode support  
- Improve UI responsiveness and animations  
- Add example sentences for words  

---

## Author

This project was built as part of a JavaScript learning exercise focusing on API integration, DOM manipulation, and asynchronous programming.

---

## License

This project is for educational purposes and can be freely used and modified for learning.
