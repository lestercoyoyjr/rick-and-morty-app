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
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container py-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <CharacterList characters={characters} />

      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
