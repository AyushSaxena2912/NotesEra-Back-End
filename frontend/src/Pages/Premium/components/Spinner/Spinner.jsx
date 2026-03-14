import styles from "./Spinner.module.css";
import { ImSpinner2 } from "react-icons/im";


const Spinner = ({ size }) => {
  return (
    <div className={styles.spinner}>
      <ImSpinner2 size={size} />
    </div>
  );
};

export default Spinner;
