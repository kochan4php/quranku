import CustomCard from "@/components/CustomCard";
import { SURAH } from "@/config";
import Layouts from "@/layouts";
import Grid from "@mui/material/Grid";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await fetch(SURAH);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

const Surah = ({ data }) => {
  console.log(data);
  return (
    <Layouts title="Surah">
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
            <CustomCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Layouts>
  );
};

export default Surah;
