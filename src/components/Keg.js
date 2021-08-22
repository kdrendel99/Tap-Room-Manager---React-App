import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  function getRemainingPintsText(remaining){
    if (remaining === 0){
      return "Out of stock!";
    }
    else{
      return `${remaining} Pints available`;
    }
  }

  return(
    <React.Fragment>
      <div style={{marginLeft: "30px"}}>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>${props.price}</p>
        <p>{props.type}</p>
        <p>{props.alcoholContent}</p>
        <p>{getRemainingPintsText(props.remainingPints)}</p>

        <button onClick = {() => props.whenKegClicked(props.id)}>View Details</button>

        <button disabled={props.remainingPints === 0 ? true : false} onClick={() => props.onClickingBuy(props.id)}>Remove one Pint</button>
      </div>
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
  remainingPints: PropTypes.number,
  keg: PropTypes.object,
  onClickingBuy: PropTypes.func
}

export default Keg;

