import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createFilter from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import persistReducer from "redux-persist/es/persistReducer";
import userSlice from "./user/userSlice";

// you want to store only a subset of your state of reducer one
// i.e userSlice:{error:"",  user: { }} ... only user is selected. Doing this would ensure that when the user's status is offline and a refresh is made, it doesn't continue to remain offline, rather only the user data is kept while the status is refetched.
const saveSubsetFilter = createFilter("user", ["user"]);

const persistConfig = {
  key: "user",
  version: 1,
  storage,
  whitelist: ["user"],
  // filtering the user state
  transforms: [saveSubsetFilter],
  // default is 5000 which is too long, reduced to 1ms
  timeout: 1000,
};

const reducers = combineReducers({
  user: userSlice,
});

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    }),
});

export default store;
