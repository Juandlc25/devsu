import { useEffect, useRef, useState } from "react";
import isValidUrl from "../../utils/isValidUrl";
import RowOptions from "../RowOptions/RowOptions";
import listenForOutsideClicks from "../../utils/listenForOutsideClicks";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import database from "../../api/database";

interface Props {
  data: string[];
  id: string;
}

const TableRow = ({ data, id }: Props) => {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [listening, setListening] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const options = [
    {
      Icon: BsFillPencilFill,
      label: "Editar",
      action: () =>
        navigate("/form", {
          state: {
            id,
            name: data[1],
            description: data[2],
            logo: data[0],
            liberationDate: data[3],
            revisionDate: data[4],
          },
        }),
    },
    {
      Icon: BsFillTrashFill,
      label: "Eliminar",
      action: () => {
        database.delete("/products?id=" + id);
        setShow(false);
        setTimeout(() => window.location.reload(), 1000);
      },
    },
  ];

  useEffect(
    listenForOutsideClicks(listening, setListening, dropdownRef, () => {
      setShow(false);
    }),
    []
  );
  return (
    <tr>
      {data.map((item) => {
        if (isValidUrl(item)) {
          return (
            <td key={item}>
              <img
                style={{ height: "80px", width: "120px" }}
                src={item}
                alt="logo"
              />
            </td>
          );
        }
        if (item === "action") {
          return (
            <td key={item}>
              <RowOptions {...{ show, setShow, dropdownRef, options }} />
            </td>
          );
        }
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;
