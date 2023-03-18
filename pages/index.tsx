// Importing the NextPage type from the 'next' package
import type { NextPage } from 'next'

// Importing the useState hook from the 'react' package
import { useState } from 'react'

// Importing the styles module from the 'Home.module.css' file
import styles from '../styles/Home.module.css'

// Importing the AddressForm component from the '../components/AddressForm' file
import AddressForm from '../components/AddressForm'

// Importing the entire 'Web3' namespace from the '@solana/web3.js' package
import * as Web3 from '@solana/web3.js'

// Defining a new component called Home, which is of type NextPage
const Home: NextPage = () => {

  // Defining two pieces of state, 'balance' and 'address', with their initial values set to 0 and an empty string respectively
  const [balance, setBalance] = useState(0)
  const [address, setAddress] = useState('')

  // Defining a function called 'addressSubmittedHandler' which takes a string argument called 'address'
  const addressSubmittedHandler = (address: string) => {

    // Using the setAddress function to set the 'address' state to the value passed in
    setAddress(address)

    // Trying to create a new Web3.PublicKey instance using the 'address' value
    try {
      const key = new Web3.PublicKey(address)

      // Creating a new Web3.Connection instance with a specific URL endpoint
      const connection = new Web3.Connection('https://blue-fragrant-tree.solana-mainnet.quiknode.pro/f32f16f2ade36fb692a860f23b428b0c86d93403/');

      // Getting the balance of the specified 'key' using the 'getBalance' method, which returns a Promise
      connection.getBalance(key).then(balance => {

        // Using the setBalance function to set the 'balance' state to the value returned from the 'getBalance' method, converted from lamports to SOL
        setBalance(balance / Web3.LAMPORTS_PER_SOL)
      })
    } catch (error) {

      // If there is an error, setting the 'address' state to an empty string and the 'balance' state to 0
      setAddress('')
      setBalance(0)

      // Showing an alert with the error message
      alert(error)
    }
  }

  // Returning some JSX with the AddressForm component and the 'address' and 'balance' state values
  // Returning some JSX markup that defines the structure and content of the Home component
return (
  // Creating a new <div> element with the class name 'App', using the 'className' prop to assign the 'styles.App' value
  <div className={styles.App}>

    {/* // Creating a new <header> element with the class name 'AppHeader', using the 'className' prop to assign the 'styles.AppHeader' value */}
    <header className={styles.AppHeader}>

      {/* // Creating a new <p> element with some text content */}
      <p>
        Solana College Balance Checker
      </p>

      {/* // Rendering the AddressForm component with a prop called 'handler' that is set to the 'addressSubmittedHandler' function */}
      <AddressForm handler={addressSubmittedHandler} />

      {/* // Creating a new <p> element with interpolated content that displays the 'address' state value */}
      <p>{`Bozo: ${address}`}</p>

      {/* // Creating a new <p> element with interpolated content that displays the 'balance' state value, converted to SOL */}
      <p>{`Bucks: ${balance} SOL`}</p>

    {/* // Closing the <header> element */}
    </header>

  {/* // Closing the <div> element */}
  </div>
)

}

// Exporting the Home component as the default export of this module
export default Home
