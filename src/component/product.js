import { getApiData } from "@/store/action";
import { fetchData } from "@/store/slices/api-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ListProduct = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api.products);

  useEffect(() => {
    dispatch(getApiData({ storeName: "products", endPoint: "products" }));
  }, [dispatch]);

  return (
    <>
      {" "}
      <p>product</p>
      {data !== null && loading == false ? (
        data?.map((data) => {
          return (
            <div key={data.id}>
              <p>{data.title}</p>
              <p>hello</p>
            </div>
          );
        })
      ) : (
        <div>{loading ? "Loading" : "Try again..."}</div>
      )}
    </>
  );
};
