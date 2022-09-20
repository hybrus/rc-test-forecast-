import { configureStore } from '@reduxjs/toolkit';
import { storeSlice } from './StoreSlice';
export default configureStore({
  reducer: {
    store: storeSlice.reducer,
  },
});
