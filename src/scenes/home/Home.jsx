import { useState, useEffect } from "react";
import useFetch from "../../customHooks/useFetch.jsx";
import MaterialCard from "../../components/MaterialCard.jsx"
import PagesButtons from "../../components/PagesButton.jsx";

//import Loader from "../global/Loader.jsx";

export default function Comics(props) {
  const [comics, setComics] = useState([]);
  const [letter, setLetter] = useState("d");
  const [offset, setOffset] = useState(0);
  const { get, loading } = useFetch();

  useEffect(() => {
    get("http://gateway.marvel.com/v1/public/comics?titleStartsWith="+letter+"&orderBy=title&offset=20")
      .then((data) => {
        setComics(data.data.results);
      })
      .catch((error) => console.log("Could not load comics", error));
  }, []);
console.log(comics)
const handleClick = num => {
  // 👇️ take the parameter passed from the Child component
  setOffset(current => current + num);
};
console.log('offset: ', offset);
  return (
    <div className="comics-layout">
      <h1>Comics</h1>
      <p>Take a look at our comics</p>
      <div className="muiCard">
      <MaterialCard/>
      </div>
      
      <div className="cards">
        {comics.map((comic,key )=> (
        <div className="card">
            <h2>{comic.title}</h2>
            <p>{comic.dates[0].date}</p>
            <img src= {`${comic.thumbnail.path}.${comic.thumbnail.extension}`}/>
        </div>
        ))}
      </div>
      <div className="navigate buttons">
        <PagesButtons handleClick={handleClick}/>
      </div>
    </div>
  );
}