import '../../stylesSheets/characters/CharacterCard.scss';
import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  const deadOrAlive = () => {
    if (props.characterInfo.status === 'Alive') {
      return (
        <i className="fas fa-heartbeat animate__animated animate__heartBeat animate__infinite"></i>
      );
    } else if (props.characterInfo.status === 'Dead') {
      return (
        <i className="fas fa-skull animate__animated animate__swing animate__infinite"></i>
      );
    } else {
      return (
        <i className="fas fa-question-circle animate__animated animate__rubberBand animate__infinite"></i>
      );
    }
  };
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
          <p className="card__text-paragraph1">
            {props.characterInfo.specie}
            <span className="card__text-paragraph3">{deadOrAlive()}</span>
          </p>
          <p className="card__text-paragraph2">{props.characterInfo.gender}</p>
        </div>
      </Link>
    </li>
  );
};
export default CharacterCard;
