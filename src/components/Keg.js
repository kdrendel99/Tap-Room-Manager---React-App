import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>${props.price}</p>
        <p>{props.type}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.remainingPints}</p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string,
  alcoholContent: PropTypes.number.isRequired,
  remainingPints: PropTypes.number,
  whenKegClicked: PropTypes.func
}

export default Keg;

