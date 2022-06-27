import '../styles/globals.css'
import Layout from './components/layout'
import './bootstrap/css/bootstrap.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return  (
            <Layout>
                <Head>
                    <link rel="icon" href="/icon.png"/>
                </Head>
                <Component {...pageProps} />
            </Layout>
            )
    }

export default MyApp