import { useState, useEffect } from "react";
import useFetch from "../../customHooks/useFetch.jsx";
import AlphabetNavBar from "../../components/AlphabetBar.jsx"
import MaterialCard from "../../components/MaterialCard.jsx"
import PagesButtons from "../../components/PagesButton.jsx";
//import Loader from "../global/Loader.jsx";

export default function Comics(props) {
  const [comics, setComics] = useState([]);
  const [letter, setLetter] = useState("b");
  const [offset, setOffset] = useState(0);
  const { get, loading } = useFetch();

  useEffect(() => {
    get("http://gateway.marvel.com/v1/public/comics?titleStartsWith="+letter+"&orderBy=title&offset=200")
      .then((data) => {
        setComics(data.data.results);
        
      })
      .catch((error) => console.log("Could not load comics", error));
  }, []);

  const handleClick = num => {
    // 👇️ take the parameter passed from the Child component
    setOffset(current => current + num);
  };

  return (
    <div className="comics-layout">
      <h1>Comics</h1>
      <p>Take a look at our comics</p>
     
      <div className="alphabetBar">
        <AlphabetNavBar/>
        
      </div>
    
      <div className="cards">
        {comics.map((comic)=> (
       <MaterialCard details = {comic} />
        ))}
      </div>
      <div className="navigate buttons">
        <PagesButtons handleClick={handleClick}/>
      </div>
    </div>
  );
}