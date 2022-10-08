import { Container } from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const Layouts = ({ title, children, bgimage }) => (
  <>
    <Head>
      <title>{title} | Quranku</title>
    </Head>
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgimage})` ?? "",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backdropFilter: "blur(20px)",
        }}
      >
        <header>
          <Navbar />
        </header>
        <main>
          <Container sx={{ mt: 10, mb: 5 }} maxWidth="xl">
            {children}
          </Container>
        </main>
        <footer>
          <Navbar />
        </footer>
      </div>
    </div>
  </>
);

export default Layouts;
