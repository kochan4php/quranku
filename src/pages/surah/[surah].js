import { SURAH } from "@/config";
import Layouts from "@/layouts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const getStaticPaths = async () => {
  const res = await fetch(SURAH);
  const data = await res.json();

  const paths = data.data.map((item) => ({
    params: {
      surah: `${item.number}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { surah } = context.params;
  const res = await fetch(`${SURAH}/${surah}`);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

const ReadSurah = ({ data }) => {
  console.log(data);

  return (
    <Layouts title={data?.name?.transliteration?.id}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {data?.name?.transliteration?.id}
          </Typography>
        </Grid>
        {data?.preBismillah && (
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent sx={{ pb: 1 }}>
                <Typography align="center" variant="h4">
                  {data?.preBismillah?.text?.arab}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
        {data?.verses?.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined">
              <CardContent sx={{ pb: 1 }}>
                <div
                  className="flex justify-between items-center"
                  style={{ gap: 10 }}
                >
                  <Typography align="left" variant="h5">
                    {item?.number?.inSurah}.
                  </Typography>
                  <Typography align="right" variant="h4">
                    {item?.text?.arab}
                  </Typography>
                </div>
                <Typography
                  align="center"
                  color="text.secondary"
                  sx={{ mt: 3 }}
                >
                  {item?.translation?.id}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layouts>
  );
};

export default ReadSurah;
