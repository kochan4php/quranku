import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <RecoilRoot>
      <RecoilNexus />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
