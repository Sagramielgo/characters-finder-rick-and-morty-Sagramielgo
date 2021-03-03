import '../stylesSheets/App.scss';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/Api';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setData(data));
  }, []);

  return (
    <>
      <h1>Segundo commit y en marcha!</h1>;
      <CharacterList />;
    </>
  );
};
export default App;
