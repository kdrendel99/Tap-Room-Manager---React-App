import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){

  const { keg, availablePints} = props;

  return(
    <React.Fragment>
      <h1>{`${keg.name} Details`}</h1>
      <h3>{`${keg.name}, By ${keg.brand}`}</h3>
      <h3>${keg.price} per keg</h3>
      <h3>{keg.type}</h3>
      <h3>{`${keg.alcoholContent}% Alc.`}</h3>
      <h3>{availablePints(keg.remainingPints)}</h3>
      <hr/>
    </React.Fragment>
  )
}


KegDetail.propTypes = {
  keg: PropTypes.object,
}

export default KegDetail;