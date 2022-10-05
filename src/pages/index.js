import { SURAH } from "@/config";
import Layouts from "@/layouts";
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

const Home = ({ data }) => {
  console.log(data.data);

  return (
    <Layouts title="Beranda">
      <div className="row">
        <div className="col">
          <CustomCard />
        </div>
        <div className="col">
          <CustomCard />
        </div>
        <div className="col">
          <CustomCard />
        </div>
      </div>
    </Layouts>
  );
};

export default Home;
