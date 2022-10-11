import "../styles/globals.css";
import Layout from "./components/Layout";

function RecipeApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default RecipeApp;
