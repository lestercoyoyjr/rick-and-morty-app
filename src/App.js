import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Pagination from './Components/Pagination'
import Characters from './Components/Characters';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container py-5">
        <Pagination />
          <Characters characters={characters} />
        <Pagination />
      </div>
    </>
  );
}

export default App;
