import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  options: {
    Icon: IconType;
    label: string;
    action?: () => void;
  }[];
}

const RowOptions = ({ show, setShow, dropdownRef, options }: Props) => {
  return (
    <div className={styles.container} ref={dropdownRef}>
      <BsThreeDotsVertical
        data-testid="icon"
        style={{ cursor: "pointer" }}
        onClick={() => setShow(true)}
      />
      {show && (
        <div className={styles.options}>
          {options.map(({ Icon, label, action }, index) => (
            <div key={index} onClick={action}>
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RowOptions;
