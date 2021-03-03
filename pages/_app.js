import '../styles/globals.css'
import '../styles/index.css';
import {DataItemsProvider} from '../contexts/dataContext';

function MyApp({ Component, pageProps }) {
  return (
    <DataItemsProvider>
      <div className="container mx-auto my-10 max-w-xl">
          <Component {...pageProps} />
      </div>
    </DataItemsProvider>
  );
}

export default MyApp;
