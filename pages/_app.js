import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "../layout/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";
import {SessionProvider} from 'next-auth/react'
import {ToastContainer} from 'react-toastify'



Router.events.on("routeChangeStart", () =>
  NProgress.start().configure({ showSpinner: true })
);
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (

    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
      
  );
}

export default MyApp;
