import '../stylesSheets/App.scss';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/Api';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    getDataFromApi().then((data) => setData(data));
  }, []);

  const filterCharacters = data.filter((character) =>
    character.name.toUpperCase().includes(searchFilter)
  );
  return (
    <div className="app">
      <header className="app__header"></header>
      <main className="app__main">
        <CharacterList charactersInfo={filterCharacters} />
      </main>
    </div>
  );
};
export default App;
