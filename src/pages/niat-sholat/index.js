import Layouts from "@/layouts";
import axios from "axios";
import { memo } from "react";

const niatSholatAPI = "https://islamic-api-zhirrr.vercel.app/api/niatshalat";

export async function getStaticProps() {
  const res = await axios.get(niatSholatAPI);
  return { props: { data: res.data } };
}

export default memo(function NiatSholat({ data }) {
  console.log(data);

  return <Layouts>Hello</Layouts>;
});
