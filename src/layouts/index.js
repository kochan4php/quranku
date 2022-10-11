import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";
import Head from "next/head";

const Layouts = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Quranku</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <Container sx={{ mt: 10, mb: 3 }} maxWidth="xl">
        {children}
      </Container>
    </main>
  </>
);

export default Layouts;
