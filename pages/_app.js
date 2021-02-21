import '../styles/globals.css'
import { ProfileWrapper } from '../context/profileContext';

function MyApp({ Component, pageProps }) {

  return (<ProfileWrapper>
    <Component {...pageProps} />
  </ProfileWrapper>);
}

export default MyApp
