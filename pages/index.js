import Head from 'next/head';
import { table, minifyRecords } from './api/utils/airtable';
import Navbar from '../components/Navbar';

export default function Home({initialDataItems}) {
  console.log(initialDataItems);
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