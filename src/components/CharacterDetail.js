import React from 'react';
/* import PropTypes from 'prop-types'; */
import '../stylesSheets/CharacterDetail.scss';
import { Link } from 'react-router-dom';
/* import image from '../images/meeseeks.png'; */

const CharacterDetail = (props) => {
  if (props.characterInfo === undefined) {
    return (
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__dialog">
            <div className="modal__content">
              <header className="modal__header">
                <Link to="/">
                  <span className="modal__close icon fas fa-undo"></span>
                </Link>
              </header>
              <div className="modal__text-error">
                <p>Error: character not found</p>
              </div>
              {/*     <div className="modal__img">
                <img
                  className="modal__img-error"
                  src={image}
                  alt={'Meeseeks worrying face'}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__dialog">
            <div className="modal__content">
              <header className="modal__header">
                <Link to="/">
                  <span className="modal__close icon fas fa-undo"></span>
                </Link>
              </header>
              <div className="modal__img">
                <img
                  className="modal__img-src"
                  src={props.characterInfo.image}
                  alt={`${props.characterInfo.name}'s portrait`}
                />
              </div>
              <div className="modal__text">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default CharacterDetail;
