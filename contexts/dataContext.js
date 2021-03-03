import {createContext, useState} from 'react';

const dataItemsContext = createContext();

const dataItemsProvider = ({children}) => {

    const [dataItems, setDataItems] = useState([]);

    const refreshDataItems = async () => {
        try {
            const res = await fetch('/api/getData');
            const latestDataItems = await res.json();
            setDataItems(latestDataItems);
        } catch(e) {
            console.error(e)
        }
    }

    return (
        <dataItemsContext.Provider
            value={{
                dataItems,
                setDataItems,
                refreshDataItems
            }}
        >
            {children}
        </dataItemsContext.Provider>
    );
}

export {dataItemsProvider, dataItemsContext}