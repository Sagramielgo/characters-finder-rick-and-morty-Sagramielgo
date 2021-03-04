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
    <section className="app__main">
      <ul className="charactersList">
        <li>{charactersList}</li>
      </ul>
    </section>
  );
};

export default CharacterList;
