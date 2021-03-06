import '../../stylesSheets/characters/CharacterList.scss';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import NotFoundCharacter from './NotFoundCharacter';

const CharacterList = (props) => {
  const charactersList = props.charactersInfo.map((card) => {
    return (
      <CharacterCard
        className="characterCard"
        key={card.id}
        characterInfo={card}
      />
    );
  });

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

CharacterList.propTypes = {
  characterInfo: PropTypes.array,
};

export default CharacterList;
