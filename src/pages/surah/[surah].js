import { SURAH } from "@/config";
import Layouts from "@/layouts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const ReadSurah = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const router = useRouter();
  const { surah } = router.query;

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(`${SURAH}/${surah}`);
      const res = await req.json();
      if (res.code === 200) {
        setData(res.data);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Layouts title={data?.name?.transliteration?.id}>
      {isLoading ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "2.125rem" }}
            />
          </Grid>
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <Grid item xs={12} key={index}>
              <Skeleton
                animation="wave"
                variant="rounded"
                width="100%"
                height={150}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
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
                <CardContent sx={{ pb: 1 }}>
                  <div
                    className="flex justify-between items-center"
                    style={{ gap: 10 }}
                  >
                    <Typography align="left" variant="h6">
                      {item?.number?.inSurah}.
                    </Typography>
                    <Typography align="right" sx={{ fontSize: "2.1rem" }}>
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
      )}
    </Layouts>
  );
};

export default ReadSurah;
