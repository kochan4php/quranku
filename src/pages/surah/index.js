import { SURAH } from "@/config";
import Layouts from "@/layouts";
import Grid from "@mui/material/Grid";
import axios from "axios";
import CustomCard from "@/components/CustomCard";

export const getStaticProps = async () => {
  const res = await axios.get(SURAH);
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
};

const Surah = ({ data }) => (
  <Layouts title="Surah">
    <Grid container spacing={2}>
      {data.data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
          <CustomCard data={item} />
        </Grid>
      ))}
    </Grid>
  </Layouts>
);

export default Surah;
