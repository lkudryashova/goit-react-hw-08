import s from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

export default function Loader({ isLoading }) {
  return (
    <div className={s.loader}>
      <ThreeDots
        visible={isLoading}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
