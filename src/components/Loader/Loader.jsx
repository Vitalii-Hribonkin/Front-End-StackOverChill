import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  const isLoading = useSelector((state) => state.global.isLoading);

  if (!isLoading) return null;

  return (
    <div className={styles.overlay}>
      <ClipLoader color="#00DA72" size={60} />
    </div>
  );
};

export default Loader;
