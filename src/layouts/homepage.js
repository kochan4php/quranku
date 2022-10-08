import { Container } from "@mui/material";
import Head from "next/head";

const LayoutsHomePage = ({ title, children, bgimage }) => (
  <>
    <Head>
      <title>{title} | Quranku</title>
    </Head>
    <div
      style={{
        backgroundImage: `url(${bgimage})` ?? "",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "black",
      }}
    >
      <main
        className="min-h-screen flex justify-center items-center"
        style={{ backdropFilter: bgimage ? "blur(50px)" : "" }}
      >
        <Container maxWidth="xl">{children}</Container>
      </main>
    </div>
  </>
);

export default LayoutsHomePage;
