import { SURAH } from "@/config";
import Layouts from "@/layouts";
import Grid from "@mui/material/Grid";
import axios from "axios";
import CustomCard from "@/components/CustomCard";
import { Button } from "@mui/material";
import Link from "next/link";

const Home = ({ data }) => (
  <Layouts title="Beranda">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Link href="/surah">
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{
              textTransform: "capitalize",
              boxShadow: 0,
              "&:hover": { boxShadow: 0 },
            }}
          >
            Surah
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link href="/">
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{
              textTransform: "capitalize",
              boxShadow: 0,
              "&:hover": { boxShadow: 0 },
            }}
          >
            Juz
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link href="/">
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{
              textTransform: "capitalize",
              boxShadow: 0,
              "&:hover": { boxShadow: 0 },
            }}
          >
            Hadits
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link href="/">
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{
              textTransform: "capitalize",
              boxShadow: 0,
              "&:hover": { boxShadow: 0 },
            }}
          >
            Surah
          </Button>
        </Link>
      </Grid>
    </Grid>
  </Layouts>
);

export default Home;
