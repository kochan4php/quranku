import { SURAH } from "@/config";
import Layouts from "@/layouts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
    <Layouts title={data.name.transliteration.id}>
      <Card variant="outlined">
        <CardContent sx={{ pb: 1 }}>
          <Typography variant="h4" align="center">
            {data.name.transliteration.id}
          </Typography>
        </CardContent>
      </Card>
    </Layouts>
  );
};

export default ReadSurah;
