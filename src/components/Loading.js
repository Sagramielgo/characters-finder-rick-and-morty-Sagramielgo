//styles
import '../stylesSheets/Loading.scss';
//react
import React from 'react';
//imported image
import image from '../images/Loading2.gif';

const Loading = (props) => {
  if (props.loading) {
    return (
      <div className="loading">
        <img className="loadingImg" src={image} alt="Loading logo" />
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;
