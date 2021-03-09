//styles
import '../stylesSheets/App.scss';

//imported component that calls to API
import getDataFromApi from './services/Api';

//react to keep usetates and apply life-cycle
import React, { useState, useEffect } from 'react';

//imported from react to get different pathlinks in a SPA
import { Route, Switch } from 'react-router-dom';

//imported components
import Header from './header/Header';
import Filters from './filters/Filters';
import Loading from './Loading';
import CharacterList from './characters/CharacterList';
import CharacterDetail from './characters/CharacterDetail';
import Footer from './Footer';
import localStorage from './services/localStorage';

//FUNCTIONAL COMPONENT
const App = () => {
  //states to control components content HOOKS
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(localStorage.get('name') || '');
  const [specie, setSpecie] = useState(localStorage.get('specie') || 'all');
  const [planets, setPlanets] = useState(localStorage.get('planets') || []);
  const [showFilters, setShowFilters] = useState(
    localStorage.get('showFilters') || false
  );

  /*   
  Update data calling to API. Loading is false when promise completes */
  useEffect(() => {
    getDataFromApi()
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []); //empty array to avoid infinite renderings

  useEffect(() => {
    localStorage.set('name', name);
    localStorage.set('specie', specie);
    localStorage.set('planets', planets);
    localStorage.set('showFilters', showFilters);
  });

  //function received by props to register inputchanges and update usetate
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'specie') {
      setSpecie(inputChange.value);
    } else if (inputChange.key === 'planet') {
      //travels along the array to get key position to compare and add to the array those which aren't there
      const indexPlanet = planets.indexOf(inputChange.value);
      if (indexPlanet === -1) {
        setPlanets([...planets, inputChange.value]);
      } else {
        //create a new array to aply splice method in order to remove those which are already in
        const newPlanets = [...planets];
        newPlanets.splice(indexPlanet, 1);
        setPlanets(newPlanets);
      }
    }
  };

  //Filter the search by comparing the input info whith the data got from API

  const filteredCharacters = data
    .filter((character) => {
      return character.name.toUpperCase().includes(name);
    })
    //array method for alphabetical order
    .sort((characterA, characterB) =>
      characterA.name > characterB.name
        ? 1
        : characterA.name < characterB.name
        ? -1
        : 0
    )

    .filter((character) => {
      return specie === 'all' ? true : character.specie === specie;
    })
    .filter((character) => {
      return planets.length === 0 ? true : planets.includes(character.planet);
    });

  //function received by props to render not duplicated planets in checkbox
  const getPlanetOptions = () => {
    const planetsArray = data.map((character) => character.planet);
    const planets = new Set(planetsArray);
    return Array.from(planets);
  };

  //function received by props to reset info by updating useState
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
  //function to hide or Show filters section
  const handleBtn = () => {
    setShowFilters(!showFilters);
  };

  //render the filtersection when the state showFilters is true, and doesn't when is false
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
          {/*  to go strictly home */}
          <>
            <Header handleBtn={handleBtn} />
            <Loading loading={loading} />
            {renderFilters()}
            <CharacterList charactersInfo={filteredCharacters} />
            <Footer />
          </>
        </Route>
        {/*  dinamic route to go to links in a SPA and share link in browser */}
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};
export default App;
