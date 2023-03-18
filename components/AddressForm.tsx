// Importing the React library, as well as the useState and ChangeEvent types from the 'react' package, and the styles module from the 'AddressForm.module.css' file
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../styles/AddressForm.module.css'

// Defining a new component called AddressForm, which takes a single prop called 'handler' that is a function that takes a string argument and returns nothing
function AddressForm(props: { handler: (address: string) => void }) {

  // Defining a piece of state called 'values', with an initial value that includes an empty string for the 'address' property
  const [values, setValues] = useState({
    address: '',
  });

  // Defining a function called 'handleSubmit' which takes a FormEvent argument and prevents the default form submission behavior, instead calling the 'handler' prop function with the 'address' value from the 'values' state
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handler(values.address)
  };

  // Defining a function called 'handleAddressInputChange' which takes a ChangeEvent argument for an <input> element, saves the value of the input to the 'values' state, and persists the event
  const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      address: event.target.value,
    }));
  };

  // Returning some JSX markup that defines the structure and content of the AddressForm component
  return (

    // Creating a new <div> element with the class name 'Form', using the 'className' prop to assign the 'styles.Form' value
    <div className={styles.Form}>

      {/* // Creating a new <form> element with an onSubmit handler that calls the 'handleSubmit' function */}
      <form onSubmit={handleSubmit}>

        {/* // Creating a new <input> element with various props to define its behavior and appearance, and using the 'handleAddressInputChange' function to update the 'address' value in the 'values' state when its value changes */}
        <input
          id="public-key"
          className={styles.formField}
          type="text"
          placeholder="Public Address, e.g. 7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp"
          name="firstName"
          value={values.address}
          onChange={handleAddressInputChange}
        />
        <br />

        {/* // Creating a new <button> element with the text 'Check SOL Balance', and with a type of 'submit' to trigger the 'handleSubmit' function when clicked */}
        <button type="submit" className={styles.formButton}>
          Check SOL Balance
        </button>
      </form>

    {/* // Closing the <div> element */}
    </div>
  );
}

// Exporting the AddressForm component as the default export of this module
export default AddressForm;
