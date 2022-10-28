import { use } from "react";
import { useRouter } from "next/router";
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

const ReadSurah = ({ data }) => {
  return (
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
                <Typography
                  align="center"
                  color="text.secondary"
                  sx={{ mt: 3 }}
                >
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
                  <Typography align="center" variant="subtitle1">
                    Ayat {item?.number?.inSurah}
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Typography
                  align="right"
                  sx={{
                    fontSize: {
                      xs: "2.4rem",
                      sm: "2.5rem",
                      md: "2.6rem",
                      lg: "2.7rem",
                      xl: "3.1rem",
                    },
                  }}
                >
                  {item?.text?.arab}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 3.5,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.2rem",
                      lg: "1.25rem",
                    },
                  }}
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
