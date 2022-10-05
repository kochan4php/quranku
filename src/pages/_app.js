import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <RecoilNexus />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
