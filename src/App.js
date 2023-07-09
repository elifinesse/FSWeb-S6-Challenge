import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Karakter from "./components/Karakter";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [swData, setSwData] = useState([]);
  const [swFilms, setSwFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => setSwData(response.data))
      .catch((error) => console.log(error));
    axios
      .get("https://swapi.dev/api/films/")
      .then((res) => setSwFilms(res.data[0].results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {swData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        swData.map((character) => (
          <Karakter data={character} key={character.name} swFilms={swFilms} />
        ))
      )}
    </div>
  );
};

export default App;
