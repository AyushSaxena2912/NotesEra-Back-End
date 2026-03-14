import { ImSpinner2 } from "react-icons/im";
import styles from "./Spinner.module.css";

const Spinner = ({ size, spinnerColor }) => {
  return (
    <div className={styles.spinner}>
      <ImSpinner2 size={size} fill={spinnerColor} />
    </div>
  );
};

export default Spinner;
