"use client";
import { Counter } from "@/component/counter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { store } from "../store/store";
import { ListProduct } from "@/component/product";
import { CartProduct } from "@/component/cart";
export default function Home(props) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main>
          <p>hello </p>
          <Counter />
          <ListProduct />
          <CartProduct />
        </main>
      </PersistGate>
    </Provider>
  );
}
