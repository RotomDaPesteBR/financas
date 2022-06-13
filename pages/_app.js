import '../styles/globals.css'
import Layout from './components/layout'
import './bootstrap/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
    return  (
            <Layout>
                <Component {...pageProps} />
            </Layout>
            )
    }

export default MyApp