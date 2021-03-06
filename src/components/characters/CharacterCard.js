import '../../stylesSheets/characters/CharacterCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  const getDeadOrAliveClass = () => {
    if (props.characterInfo.status === 'Alive') {
      return 'fa-heartbeat animate__heartBeat';
    } else if (props.characterInfo.status === 'Dead') {
      return 'fa-skull animate__swing';
    } else {
      return 'fa-question animate__rubberBand';
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
            <span className="card__text-paragraph3">
              <i
                className={`fas animate__animated animate__infinite ${getDeadOrAliveClass()}`}
              />
            </span>
          </p>
          <p className="card__text-paragraph2">{props.characterInfo.gender}</p>
        </div>
      </Link>
    </li>
  );
};

CharacterCard.propTypes = {
  characterInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    specie: PropTypes.string,
  }),
};

export default CharacterCard;
