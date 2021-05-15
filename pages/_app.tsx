import { AppProps } from "next/app";
import "styles/dank-mono.css";
import "styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
