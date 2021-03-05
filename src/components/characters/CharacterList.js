import '../../stylesSheets/characters/CharacterList.scss';
import CharacterCard from './CharacterCard';
import NotFound from '../NotFound';

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
    return <NotFound />;
  }
  return (
    <main className="app__main">
      <ul className="charactersList animate__animated animate__zoomIn">
        {charactersList}
      </ul>
    </main>
  );
};

export default CharacterList;
