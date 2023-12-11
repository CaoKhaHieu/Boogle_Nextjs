import Head from "next/head";
import Footer from '../layouts/footer';
import Header from '../layouts/header';
import '../stylesheets/styles.scss';

import SignInModalProvider from '../contexts/signin-modal/SignInModalContext';
import LoadingProvider from '../contexts/loading/LoadingContext';
import NotificationProvider from "../contexts/notification/NotificationContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Boogle</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css?fbclid=IwAR3RJieYNfmQVm1KhVvVuS24YKvwpDh19IZqQOKlKb7SJJY3EBj_qel1tqM"
        />
      </Head>
      <SignInModalProvider>
        <NotificationProvider>
          <LoadingProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </LoadingProvider>
        </NotificationProvider>
      </SignInModalProvider>
    </div>
  );
};

export default MyApp;
