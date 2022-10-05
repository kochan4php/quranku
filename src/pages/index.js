import { SURAH } from "@/config";
import Layouts from "@/layouts";
import axios from "axios";

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
          <div className="card">
            <div className="card-header">Heade</div>
            <div className="card-body">Body</div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">Heade</div>
            <div className="card-body">Body</div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">Heade</div>
            <div className="card-body">Body</div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Home;
