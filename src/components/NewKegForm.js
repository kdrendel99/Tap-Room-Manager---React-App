import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){
  function testFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      type: event.target.type.value,
      alcoholContent: event.target.alcoholContent.value,
      remainingPints: event.target.remainingPints.value,
      id: v4()
    });
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

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewKegForm;