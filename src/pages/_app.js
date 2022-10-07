import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import CssBaseline from "@mui/material/CssBaseline";

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <CssBaseline />
    <RecoilNexus />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
