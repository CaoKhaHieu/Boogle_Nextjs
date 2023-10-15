import Footer from '../layouts/footer';
import Header from '../layouts/header';
import '../stylesheets/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
