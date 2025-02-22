import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./action/userSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local store

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);


const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

const persist = persistStore(store);

export { store, persist };
