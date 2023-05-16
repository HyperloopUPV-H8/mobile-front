import { Article } from "components/Article/Article";
import styles from "./EMUnits.module.scss";

type Props = {
    title: string;
    body: string;
    units: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];
};

export const EMUnits = ({ title, body, units }: Props) => {
    return (
        <div className={styles.hems}>
            <Article
                title={title}
                body={body}
            />
            <div className={styles.tags}>
                {units.map((unit) => {
                    return unit;
                })}
            </div>
        </div>
    );
};
