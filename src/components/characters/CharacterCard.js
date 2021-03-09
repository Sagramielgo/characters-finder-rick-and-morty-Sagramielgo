//styles
import '../../stylesSheets/characters/CharacterCard.scss';

//Proptypes
import PropTypes from 'prop-types';

//react
import { Link } from 'react-router-dom';

//FUNCTIONAL COMPONENT
const CharacterCard = (props) => {
  //function to get the status and render a representative icon
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
      {/* the complete card is a link to click on it */}
      <Link className="link card" to={`/character/${props.characterInfo.id}`}>
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
                className={`fas animate__animated animate__infinite ${getDeadOrAliveClass()}`} //call the function to render the resulting class
              />
            </span>
          </p>
          <p className="card__text-paragraph2">{props.characterInfo.gender}</p>
        </div>
      </Link>
    </li>
  );
};

//propTypes
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
