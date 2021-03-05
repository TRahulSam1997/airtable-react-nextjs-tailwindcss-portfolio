import '../styles/globals.css'
import '../styles/index.css';
import {DataItemsProvider} from '../contexts/dataContext';

function MyApp({ Component, pageProps }) {
  return (
    <DataItemsProvider>
      <div className="bg-gray-800 pattern py-5">
          <Component {...pageProps} />
      </div>
    </DataItemsProvider>
  );
}

export default MyApp;
