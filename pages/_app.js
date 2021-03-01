import '../styles/globals.css'
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto my-10 max-w-xl">
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
