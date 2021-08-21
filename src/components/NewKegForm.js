import React from "react";
// import PropTypes from "prop-types";

function NewKegForm(){
  return (
    <React.Fragment>
      <form>
        <input 
          type='text'
          name='name'
          placeholder='New Keg name'/>
        <input 
          type='text'
          name='brand'
          placeholder='Brand'/>
        <input 
          type='text'
          name='price'
          placeholder='Price of Keg'/>
        <input 
          type='text'
          name='type'
          placeholder='Type of Alcohol'/>
        <input 
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content'/>
        <input 
          type='text'
          name='remainingPints'
          placeholder='Remaining Pints in Keg'/>
          <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

// NewKegForm.propTypes = {
//   buttonText: PropTypes.string
// };

export default NewKegForm;