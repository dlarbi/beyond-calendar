import Error from 'next/error';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
