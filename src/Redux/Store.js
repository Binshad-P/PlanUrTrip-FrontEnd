import { configureStore } from "@reduxjs/toolkit";
import PackageSlice from "./PackageSlice";
const store = configureStore({
  reducer: {
    packages: PackageSlice,
  },
});

export default store;
