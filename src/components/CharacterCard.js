import '../stylesSheets/CharacterCard.scss';
import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  return (
    <li>
      <Link
        className="link card"
        to={`/character/${props.characterInfo.id}`}
        replace
      >
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
      </Link>
    </li>
  );
};
export default CharacterCard;
