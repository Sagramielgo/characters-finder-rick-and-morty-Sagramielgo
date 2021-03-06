//styles
import '../../stylesSheets/characters/CharacterList.scss';

//propTypes
import PropTypes from 'prop-types';

//imported components
import CharacterCard from './CharacterCard';
import NotFoundCharacter from './NotFoundCharacter';

//FUNCTINAL COMPONENT
const CharacterList = (props) => {
  //array method to get key and information of each character
  const charactersList = props.charactersInfo.map((card) => {
    return (
      <CharacterCard
        className="characterCard"
        key={card.id}
        characterInfo={card}
      />
    );
  });
  //condition to render a "try again" message in case the searchin name inserted at the inputs were not found
  if (charactersList.length === 0) {
    return <NotFoundCharacter />;
  }
  return (
    <main className="app__main">
      <ul className="charactersList animate__animated animate__zoomIn">
        {charactersList}
      </ul>
    </main>
  );
};

//propTypes
CharacterList.propTypes = {
  characterInfo: PropTypes.array,
};

export default CharacterList;
