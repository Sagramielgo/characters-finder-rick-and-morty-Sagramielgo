import '../stylesSheets/App.scss';
import CharacterList from './CharacterList';
import getDataFromApi from './services/Api';
import Filters from './filters/Filters';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('all');

  useEffect(() => {
    getDataFromApi().then((data) => setData(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'specie') {
      setSpecie(inputChange.value);
    }
  };
  console.log(specie);

  const filteredCharacters = data
    .filter((character) => {
      return character.name.toUpperCase().includes(name);
    })

    .filter((character) => {
      return specie === 'all' ? true : character.specie === specie;
    });

<<<<<<< HEAD
  const handleReset = () => {
    console.log('estoy borrando');
    setData(data);
    setName('');
    setSpecie('all');
  };
  console.log(name);
=======
  console.log(filteredCharacters);

  const renderCharacterDetail = (routerProps) => {
    const clickedCharacter = parseInt(routerProps.match.params.id);
    const foundCharacter = data.find((character) => {
      return character.id === clickedCharacter;
    });
    return <CharacterDetail characterInfo={foundCharacter} />;
  };

>>>>>>> master
  return (
    <div className="app">
      <header className="app__header">
        <Filters handleFilter={handleFilter} handleReset={handleReset} />
      </header>
      <main className="app__main">
        <Switch>
          <Route exact path="/">
            <CharacterList charactersInfo={filteredCharacters} />
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </div>
  );
};
export default App;
