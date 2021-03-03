import Head from 'next/head';
import { table, minifyRecords } from './api/utils/airtable';
import {DataItemsContext} from '../contexts/dataContext';
import Navbar from '../components/Navbar';
import DataItem from '../components/DataItem';
import {useEffect, useContext} from 'react';

export default function Home({initialDataItems}) {

  const { dataItems, setDataItems } = useContext(DataItemsContext);

  useEffect(() => {
    setDataItems(initialDataItems)
  }, [])
    return (
        <div>
            <main>
              <div className="max-w-xl m-auto p-2">
              <Head>
                  <title>Porfolio</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
                <Navbar />
                <h1 className="text-2xl text-center mb-4">Porfolio</h1>
                <ul>
                  {dataItems &&
                    dataItems.map((dataItem) => (
                      <DataItem key={dataItem.id} dataItem={dataItem} />
                  ))}
                </ul>
              </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
  try {
    let dataItems = await table
        .select({ })
        .firstPage();
    return {
        props: {
            initialDataItems: minifyRecords(dataItems),
        }
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        e: "Something Went Wrong!"
      }
    }
  }
}