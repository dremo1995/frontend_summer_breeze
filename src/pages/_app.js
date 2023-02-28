import "../styles/globals.css";
import { Header, Footer } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <div className="font-sans min-h-screen ">
      <Header />
      <hr className="mt-2" />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
