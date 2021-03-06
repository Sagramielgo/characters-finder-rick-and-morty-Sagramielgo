//styles
import '../../stylesSheets/characters/NotFoundCharacter.scss';
//react
import React from 'react';

//imported images
import image from '../../images/no.gif';
import imageOops from '../../images/oops.gif';

//FUNCTIONAL COMPONENT
const NotFoundCharacter = () => {
  return (
    <li className="error">
      <img src={imageOops} className="error__image image1" alt="Oops" />
      <p className="error__text">
        Ooops!! Are you sure this character exists? Please try another search.
      </p>
      <img className="error__image image2" src={image} alt="Search Error" />
    </li>
  );
};

export default NotFoundCharacter;
