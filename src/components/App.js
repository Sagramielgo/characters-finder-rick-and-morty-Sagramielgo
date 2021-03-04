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
    .sort((characterA, characterB) =>
      characterA.name > characterB.name ? 1 : -1
    )

    .filter((character) => {
      return specie === 'all' ? true : character.specie === specie;
    });

  const handleReset = () => {
    console.log('estoy borrando');
    setData(data);
    setName('');
    setSpecie('all');
  };
  console.log(name);
  console.log(filteredCharacters);

  const renderCharacterDetail = (routerProps) => {
    const clickedCharacter = parseInt(routerProps.match.params.id);
    const foundCharacter = data.find((character) => {
      return character.id === clickedCharacter;
    });
    return <CharacterDetail characterInfo={foundCharacter} />;
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <>
            <header className="app__header">
              <Filters
                handleFilter={handleFilter}
                handleReset={handleReset}
                name={name}
                specie={specie}
              />
            </header>
            <main className="app__main">
              <CharacterList charactersInfo={filteredCharacters} />
            </main>
          </>
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};
export default App;
