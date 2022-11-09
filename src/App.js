import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'

function App() {

  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <Navbar brand="Rick and Morty App" />
  );
}

export default App;
