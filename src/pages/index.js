import Layouts from "@/layouts";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { styledBtn } from "@/styles/styledBtn";

const Home = () => (
  <Layouts title="Beranda">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Link href="/surah">
          <Button fullWidth variant="contained" color="success" sx={styledBtn}>
            Surah
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link href="/">
          <Button fullWidth variant="contained" color="success" sx={styledBtn}>
            Juz
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link href="/">
          <Button fullWidth variant="contained" color="success" sx={styledBtn}>
            Hadits
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link href="/">
          <Button fullWidth variant="contained" color="success" sx={styledBtn}>
            Surah
          </Button>
        </Link>
      </Grid>
    </Grid>
  </Layouts>
);

export default Home;
