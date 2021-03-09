//imported styles
import '../../stylesSheets/characters/CharacterDetail.scss';

//propTypes
import PropTypes from 'prop-types';

//react
import React from 'react';
import { Link } from 'react-router-dom';

//imported images
import image from '../../images/CatNoWay.gif';
import logo from '../../images/logo.png';

//imported components
import Footer from '../Footer';

//FUNCTIONAL COMPONENT
const CharacterDetail = (props) => {
  //condition to render error-card in case the character searched in the browser were not found
  if (props.characterInfo === undefined) {
    return (
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content animate__animated animate__rubberBand">
            <header className="modal__header">
              <Link to="/">
                <span className="modal__close icon iconError fas fa-undo animate__animated animate__heartBeat animate__infinite"></span>
              </Link>
            </header>
            <div className="modal__text--error">
              <img
                src={logo}
                className="logoDetail logoDetail--error"
                alt="logo Rick and Morty"
              />
              <p>Error:</p>
              <p>Character not found</p>
            </div>
            <div className="modal__img">
              <img
                className="modal__img--error"
                src={image}
                alt={'Cat no way'}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //render a card with more details of the selected character
    return (
      <article className="modal">
        <div className="modal__dialog">
          <div className="modal__content animate__animated animate__rubberBand">
            <div className="modal__img">
              <img
                className="modal__img--src"
                src={props.characterInfo.image}
                alt={`${props.characterInfo.name}'s portrait`}
              />
            </div>

            <div className="modal__text">
              <img
                src={logo}
                className="logoDetail"
                alt="logo Rick and Morty"
              />
              <h2>{props.characterInfo.name}</h2>
              <p>
                <span className="modal__text--property">Status: </span>
                <span>{props.characterInfo.status}</span>
              </p>
              <p>
                <span className="modal__text--property">Species: </span>
                <span>{props.characterInfo.specie}</span>
              </p>
              <p>
                <span className="modal__text--property">Origin: </span>
                <span>{props.characterInfo.planet}</span>
              </p>
              <p>
                <span className="modal__text--property">Episodes: </span>
                <span>{props.characterInfo.episodes.length}</span>
              </p>
              <Footer />
            </div>
            <Link to="/">
              <span className="modal__close icon iconDetail fas fa-undo animate__animated animate__heartBeat animate__infinite"></span>
            </Link>
          </div>
        </div>
      </article>
    );
  }
};

//propTypes
CharacterDetail.propTypes = { characterInfo: PropTypes.object };

export default CharacterDetail;
