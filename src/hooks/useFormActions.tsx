import { useState } from "react";
import { useNavigate } from "react-router-dom";
import database from "../api/database";
import { Product } from "../interfaces/product.interface";
import { FormInterface } from "../interfaces/form.interface";

interface Props {
  state?: FormInterface;
  form: FormInterface;
}

const useFormActions = ({ state, form }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const saveProduct = () => {
    setIsLoading(true);
    database
      .post<Product[]>("/products", {
        id: form.id,
        name: form.name,
        description: form.description,
        logo: form.logo,
        date_release: form.liberationDate,
        date_revision: form.revisionDate,
      })
      .then(() => {
        navigate("/");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  const editProduct = () => {
    setIsLoading(true);
    database
      .put<Product[]>("/products?id=" + state?.id, {
        id: form.id,
        name: form.name,
        description: form.description,
        logo: form.logo,
        date_release: form.liberationDate,
        date_revision: form.revisionDate,
      })
      .then(() => {
        navigate("/");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return {
    editProduct,
    saveProduct,
    isLoading,
  };
};

export default useFormActions;
