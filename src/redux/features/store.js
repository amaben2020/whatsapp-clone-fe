import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
// import persistReducer from "redux-persist/es/persistReducer";
import { persistReducer } from "redux-persist";
import userSlice from "./user/userSlice";
import persistStore from "redux-persist/es/persistStore";

// you want to store only a subset of your state of reducer one
// i.e userSlice:{error:"",  user: { }} ... only user is selected. Doing this would ensure that when the user's status is offline and a refresh is made, it doesn't continue to remain offline, rather only the user data is kept while the status is refetched.

// const saveSubsetFilter = createFilter("user", ["user"]);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
  // filtering the user state
  // transforms: [saveSubsetFilter],
  // default is 5000 which is too long, reduced to 1ms
  timeout: 1000,
};

const reducers = combineReducers({
  user: userSlice,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      // serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
