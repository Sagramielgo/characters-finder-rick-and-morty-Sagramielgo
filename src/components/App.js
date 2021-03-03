import '../stylesSheets/App.scss';
import CharacterList from './CharacterList';
import getDataFromApi from './services/Api';
import Filters from './filters/Filters';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  /* const [species, setSpecies] = useState(''); */

  useEffect(() => {
    getDataFromApi().then((data) => setData(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    }
  };

  const filteredCharacters = data.filter((character) =>
    character.name.toUpperCase().includes(name)
  );
  console.log(filteredCharacters);
  return (
    <div className="app">
      <header className="app__header">
        <Filters handleFilter={handleFilter} />
      </header>
      <main className="app__main">
        <CharacterList charactersInfo={filteredCharacters} />
      </main>
    </div>
  );
};
export default App;
