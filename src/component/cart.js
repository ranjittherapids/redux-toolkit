import { getApiData } from "@/store/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CartProduct = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api.cart);

  useEffect(() => {
    dispatch(getApiData({ storeName: "cart", endPoint: "products" }));
  }, [dispatch]);

  return (
    <>
      <p>cart</p>
    </>
  );
};
