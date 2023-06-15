import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Table from "../../components/Table";
import styles from "./styles.module.scss";
import Layout from "../../components/Layout";
import useGetProducts from "../../hooks/useGetProducts";
import Loader from "../../components/Loader/Loader";
import convertDate from "../../utils/convertDate";
import { useState } from "react";

const Root = () => {
  const navigate = useNavigate();
  const { products, filteredproducts, setFilteredProducts, isLoading } =
    useGetProducts();
  const [select, setSelect] = useState<string>("5");
  const columns = filteredproducts
    .slice(0, Number(select))
    .map(({ id, logo, name, description, date_release, date_revision }) => ({
      id,
      items: [
        logo,
        name,
        description,
        convertDate(date_release),
        convertDate(date_revision),
        "action",
      ],
    }));

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          <div className={styles.actions}>
            <input
              placeholder="Search..."
              type="text"
              onChange={(e) =>
                setFilteredProducts(
                  products.filter((product) =>
                    product.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  )
                )
              }
            />
            <Button
              onClick={() => {
                navigate("/form");
              }}
              title="Agregar"
              variant="primary"
            />
          </div>
          <Table
            tbodyData={columns}
            theadData={[
              "Logo",
              "Nombre del producto",
              "Descripción",
              "Fecha de liberación",
              "Fecha de reeconstrucción",
              " ",
            ]}
            footer={
              <div className={styles.footer}>
                <span>{products.length} resultados</span>
                <select
                  defaultValue={"5"}
                  onChange={(e) => setSelect(e.target.value)}
                  data-testid="select-footer"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
            }
          />
        </div>
      )}
    </Layout>
  );
};

export default Root;
