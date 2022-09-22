import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { selectedProduct } from "../../data/products";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getSelectedProduct = new Promise((accept, reject) => {
      setTimeout(() => {
        accept(selectedProduct);
      }, 1000);
    });

    getSelectedProduct
      .then((result) => {
        setIsLoading(false);
        setProduct(result);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "75vh",
          }}
        >
          <span
            style={{
              fontSize: 20,
            }}
          >
            Cargando...
          </span>
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
