import Head from 'next/head'
import dynamic from 'next/dynamic'
const MainPage = dynamic(() => import('../components/MainPage'))


const IndexPage = () => {
    return (
        <>
        <Head>
          <title>Q-Solutions</title>
          
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainPage />
        </>
      );
        
    
};

export default IndexPage;