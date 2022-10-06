import { Container } from "@mui/material";

const { default: Navbar } = require("@/components/Navbar");
const { default: Head } = require("next/head");

const Layouts = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Quranku</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <Container sx={{ mt: 12, mb: 5 }} maxWidth="xl">
        {children}
      </Container>
    </main>
  </>
);

export default Layouts;
