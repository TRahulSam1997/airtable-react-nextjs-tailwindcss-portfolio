import {createContext, useState} from 'react';

const DataItemsContext = createContext();

const DataItemsProvider = ({children}) => {

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
        <DataItemsContext.Provider
            value={{
                dataItems,
                setDataItems,
                refreshDataItems
            }}
        >
            {children}
        </DataItemsContext.Provider>
    );
}

export {DataItemsProvider, DataItemsContext}