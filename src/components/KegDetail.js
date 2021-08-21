import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  function getRemainingPintsText(remaining){
    if (remaining === 0){
      return "Out of stock!";
    }
    else{
      return `${remaining} Pints available`;
    }
  }

  const { keg, onClickingBuy } = props;

  return(
    <React.Fragment>
      <h1>{`${keg.name} Details`}</h1>
      <h3>{`${keg.name}, By ${keg.brand}`}</h3>
      <h3>${keg.price} per keg</h3>
      <h3>{keg.type}</h3>
      <h3>{`${keg.alcoholContent}% Alc.`}</h3>
      <h3>{getRemainingPintsText(keg.remainingPints)}</h3>
      <button disabled={keg.remainingPints === 0 ? true : false} onClick={() => onClickingBuy(keg)}>Buy now!</button>
      <hr/>
    </React.Fragment>
  )
}


KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingBuy: PropTypes.func
}

export default KegDetail;