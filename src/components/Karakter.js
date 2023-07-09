import React, { useState } from "react";

// Karakter bileşeniniz buraya gelecek

function Karakter(props) {
  const { data } = props;
  const [clicked, setClick] = useState(false);
  console.log(clicked);

  return (
    <div className={clicked ? "character-open" : "character-close"}>
      <div className="character-name" onClick={() => setClick(!clicked)}>
        <h4>{data.name}</h4>
      </div>
      <div className="character-info">
        <p>Gender: {data.gender}</p>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
        <p>Birth Year: {data.birth_year}</p>
        <p>Eye Color: {data.eye_color}</p>
        <p>Hair Color: {data.hair_color}</p>
        <p>Appears in {data.films.length} films</p>
        <p>Films: {data.films}</p>
      </div>
    </div>
  );
}

export default Karakter;
