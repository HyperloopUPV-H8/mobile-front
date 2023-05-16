import { EMS } from "./EMS/EMS";
import { HEMS } from "./HEMS/HEMS";
import styles from "./Levitation.module.scss";

export const Levitation = () => {
    return (
        <div className={styles.levitation}>
            <HEMS />
            <EMS />
        </div>
    );
};
