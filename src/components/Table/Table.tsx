import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  theadData: string[];
  tbodyData: { id: string; items: string[] }[];
  customClass?: string;
  footer: JSX.Element;
}

const Table = ({ theadData, tbodyData, customClass, footer }: Props) => (
  <div className={classNames(styles.container, customClass)}>
    <table>
      <thead>
        <tr>
          {theadData.map((head) => {
            return <TableHead key={head} item={head} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((body) => {
          return <TableRow key={body.id} id={body.id} data={body.items} />;
        })}
      </tbody>
    </table>
    {footer}
  </div>
);

export default Table;
