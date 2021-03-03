import '../stylesSheets/CharacterCard.scss';
const CharacterCard = (props) => {
  return (
    <>
      <div className="card__container-img">
        <img
          className="card__img"
          src={props.characterInfo.image}
          alt={`${props.characterInfo.name}'s portrait`}
        />
      </div>
      <div className="card__text">
        <h3 className="card__text-title">{props.characterInfo.name}</h3>
        <p className="card__text-paragraph">{props.characterInfo.specie}</p>
        <p className="card__text-paragraph">{props.characterInfo.planet}</p>
      </div>
    </>
  );
};
export default CharacterCard;
