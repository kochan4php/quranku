import { Container } from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const Layouts = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Quranku</title>
    </Head>
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <header>
        <Navbar />
      </header>
      <main>
        <Container sx={{ mt: 12, mb: 5 }} maxWidth="xl">
          {children}
        </Container>
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  </>
);

export default Layouts;
