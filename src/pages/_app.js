import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <RecoilRoot>
      <CssBaseline />
      <RecoilNexus />
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </RecoilRoot>
  );
};

export default MyApp;
