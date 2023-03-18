// Importing the global CSS styles from the 'globals.css' file
import '../styles/globals.css'

// Importing the AppProps type from the 'next/app' package
import type { AppProps } from 'next/app'

// Defining a new component called MyApp, which takes two props: 'Component' and 'pageProps', both of which are of type AppProps
function MyApp({ Component, pageProps }: AppProps) {

  // Returning some JSX markup that renders the Component prop with its pageProps
  return <Component {...pageProps} />
}

// Exporting the MyApp component as the default export of this module
export default MyApp
