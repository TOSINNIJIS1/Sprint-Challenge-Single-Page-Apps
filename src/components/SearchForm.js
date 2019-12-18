import React, {useState} from "react";


export default function SearchForm(props) {

  const [Search, setSearch] = useState([]);


  const handleChange = event => {
    setSearch(event.target.value);
    console.log(Search);
  };

  const submitChange = event => {
    event.preventDefault();
    const filter = props.characters.filter(chars => {
      return chars.name.toLowerCase().indexOf(Search.toLowerCase())!== -1;

    });

    props.search(filter);

  }

  return (
    <section className="search-form">
      <form onSubmit={submitChange}>
        <input onChange={handleChange} 
        type="text"
        name="search"
        placeholder="Search"
        />

        <button> Submit </button>
      </form>
    </section>
  );
}
