import React from "react";
// import PropTypes from "prop-types";

function NewKegForm(){
  function testFormSubmission(event){
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.type.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.remainingPints.value);
  }
  
  return (
    <React.Fragment>
      <form onSubmit = {testFormSubmission}>
        <h2>Add a new Keg</h2>
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