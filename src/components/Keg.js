import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <p>{props.price}</p>
      <p>{props.type}</p>
      <p>{props.alcoholContent}</p>
      <p>{props.remainingPints}</p>
      <hr/>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string,
  alcoholContent: PropTypes.number.isRequired,
  remainingPints: PropTypes.number
}

export default Keg;

