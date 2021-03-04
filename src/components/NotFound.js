import React from 'react';
import '../stylesSheets/NotFound.scss';
import image from '../images/no.gif';
import imageOops from '../images/oops.gif';

const NotFound = () => {
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

export default NotFound;
