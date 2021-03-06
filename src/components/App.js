import '../stylesSheets/App.scss';

import getDataFromApi from './services/Api';

import Header from './header/Header';
import Filters from './filters/Filters';
import CharacterList from './characters/CharacterList';
import CharacterDetail from './characters/CharacterDetail';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('all');
  const [planets, setPlanets] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getDataFromApi().then((data) => setData(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'specie') {
      setSpecie(inputChange.value);
    } else if (inputChange.key === 'planet') {
      const indexPlanet = planets.indexOf(inputChange.value);
      if (indexPlanet === -1) {
        setPlanets([...planets, inputChange.value]);
      } else {
        const newPlanets = [...planets];
        newPlanets.splice(indexPlanet, 1);
        setPlanets(newPlanets);
        console.log(newPlanets);
      }
    }
  };
  const filteredCharacters = data
    .filter((character) => {
      return character.name.toUpperCase().includes(name);
    })
    .sort((characterA, characterB) =>
      characterA.name > characterB.name ? 1 : -1
    )
    .filter((character) => {
      return specie === 'all' ? true : character.specie === specie;
    })
    .filter((character) => {
      return planets.length === 0 ? true : planets.includes(character.planet);
    });
  //no pintar los repetidos
  const getPlanetOptions = () => {
    const planetsArray = data.map((character) => character.planet);
    const planets = new Set(planetsArray);
    return Array.from(planets);
  };

  const handleReset = () => {
    setData(data);
    setName('');
    setSpecie('all');
    setPlanets([]);
  };

  const renderCharacterDetail = (props) => {
    const clickedCharacter = parseInt(props.match.params.id);
    const foundCharacter = data.find((character) => {
      return character.id === clickedCharacter;
    });
    return <CharacterDetail characterInfo={foundCharacter} />;
  };
  //oShow or hice fiters section
  const handleBtn = () => {
    setShowFilters(!showFilters);
  };

  const renderFilters = () => {
    return showFilters ? (
      <Filters
        handleFilter={handleFilter}
        handleReset={handleReset}
        name={name}
        specie={specie}
        planetOptions={getPlanetOptions()}
        planets={planets}
      />
    ) : null;
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <>
            <Header handleBtn={handleBtn} />
            {renderFilters()}
            <CharacterList charactersInfo={filteredCharacters} />
            <Footer />
          </>
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};
export default App;
