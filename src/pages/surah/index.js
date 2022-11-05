import CustomCard from "@/components/CustomCard";
import { SURAH } from "@/config";
import Layouts from "@/layouts";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { memo } from "react";

export async function getStaticProps() {
  const res = await fetch(SURAH);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
}

export default memo(function Surah({ data }) {
  return (
    <Layouts title="Surah">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" sx={{ mb: 1, mt: 0.5 }}>
            Al Quran
          </Typography>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
            <CustomCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Layouts>
  );
});
