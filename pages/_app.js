import '../styles/globals.css';
import NavMenu from './navMenu';

function MyApp({ Component, pageProps }) {
  return(
    <body dir="rtl">
      <div className='flex flex-row'>
        <NavMenu className='flex-1'/>
        <Component className='flex-1' {...pageProps} />
      </div>
  </body>)
}

export default MyApp
