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
    <section>
      <ul className="charactersList">{charactersList}</ul>
    </section>
  );
};

export default CharacterList;
