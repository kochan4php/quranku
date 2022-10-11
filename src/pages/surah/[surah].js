import { SURAH } from "@/config";
import Layouts from "@/layouts";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const getServerSideProps = async (context) => {
  const surah = context.params.surah;
  const res = await fetch(`${SURAH}/${surah}`);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

const ReadSurah = ({ data }) => (
  <Layouts title={data?.name?.transliteration?.id}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Surah {data?.name?.transliteration?.id}
        </Typography>
      </Grid>
      {data?.preBismillah && (
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent sx={{ pb: 1 }}>
              <Typography align="center" variant="h4">
                {data?.preBismillah?.text?.arab}
              </Typography>
              <Typography align="center" color="text.secondary" sx={{ mt: 3 }}>
                {data?.preBismillah?.translation?.id}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
      {data?.verses?.map((item, index) => (
        <Grid item xs={12} key={index}>
          <Card variant="outlined">
            <CardHeader
              sx={{ p: 1 }}
              title={
                <Typography align="center" variant="body1">
                  Ayat {item?.number?.inSurah}
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography align="right" sx={{ fontSize: "2.1rem" }}>
                {item?.text?.arab}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 3.5 }}>
                {item?.translation?.id}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Layouts>
);

export default ReadSurah;
