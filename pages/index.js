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
                <section className="bg-gray-800 pattern py-20">
                  <div className="max-w-5xl px-6 mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-white">Projects</h2>

                    <div className="flex items-center justify-center mt-10">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img className="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt="" />
                            </div>

                            <a href="#" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span className="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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