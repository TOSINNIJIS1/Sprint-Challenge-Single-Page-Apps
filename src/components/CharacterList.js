import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";
import SearchForm from "./SearchForm";
import {Row, Container} from "reactstrap";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [Char, setChar] = useState([]);
  const [Data, setData] = useState([]);

  const SearchData = (Arr) => {
    setData(Arr);
    console.log(setData)
  };


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then((res) => {
      setChar(res.data.results)
      setData(res.data.results)
    })

    

  }, []);


  return (
    <section className="character-list">
      <Link to = "/">
      <button> HomePage </button>
      </Link>

      <SearchForm search={SearchData} characters={Char} />
      <Container className="container2">
      <Row>
        {Data.map((char)=> {
          return (
            <CharacterCard key={char.id}
            name = {char.name}
            location = {char.location.name}
            status = {char.status}
            image = {char.image}
            />
          )
        })}
      </Row>
      </Container>

    </section>
  );
}
