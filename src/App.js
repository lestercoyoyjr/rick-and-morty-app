import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'

function App() {

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => console.log(data))
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
