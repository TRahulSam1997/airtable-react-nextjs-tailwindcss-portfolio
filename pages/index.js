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
              <div className="max-w-3xl m-auto">
                <Head>
                    <title>Porfolio</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                  <Navbar />
                  <section className="bg-white mt-20 py-3">
                    <div className="max-w-2xl px-6 text-center mx-auto">
                      <h2 className="text-3xl font-semibold text-gray-800">Hi, <span className="bg-indigo-600 text-white rounded px-1">Rahul</span>. Nice to meet you.</h2>
                      <p className="text-gray-600 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi, culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus ipsum quae.</p>
                    </div>
                  </section>
                  <ul>
                    {dataItems &&
                      dataItems.map((dataItem) => (
                        <DataItem key={dataItem.id} dataItem={dataItem} />
                    ))}
                  </ul>
                  <footer className="bg-white">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-gray-600">&copy; Rahul Samaranayake</div>
                    </div>
                </div>
            </div>
        </footer>
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