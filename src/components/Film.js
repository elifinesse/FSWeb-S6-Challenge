import React, { useState } from "react";

function Film(props) {
  const { filmInfo } = props;
  const [clicked, setClick] = useState(false);
  console.log(filmInfo);
  console.log(filmInfo.producer);
  return (
    <div className={clicked ? "character-open" : "character-close"}>
      <div className="character-name" onClick={() => setClick(!clicked)}>
        <p>{filmInfo.title}</p>
      </div>
      <p>{filmInfo.opening_crawl}</p>
      <p>{filmInfo.director}</p>
      <p>{filmInfo.producer}</p>
      <p>{filmInfo.release_date}</p>
    </div>
  );
}

export default Film;
