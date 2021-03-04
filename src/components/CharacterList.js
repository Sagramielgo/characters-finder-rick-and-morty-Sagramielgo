import '../stylesSheets/CharacterList.scss';
import CharacterCard from './CharacterCard';

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
  return (
    <section>
      <ul className="charactersList">{charactersList}</ul>
    </section>
  );
};

export default CharacterList;
