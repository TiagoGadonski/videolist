import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css'

import type { AppProps } from 'next/app';
import Layout from '@/app/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component className="card mb-3 mx-auto"
      {...pageProps} />
    </Layout>
  );
}

export default MyApp;
