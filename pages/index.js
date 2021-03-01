import Head from 'next/head';
export default function Home() {

    return (
        <div>
            <Head>
                <title>Porfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <h1 className="text-2xl text-center mb-4">Porfolio</h1>
            </main>
        </div>
    );
}