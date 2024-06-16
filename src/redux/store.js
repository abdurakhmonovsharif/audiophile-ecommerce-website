import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import { authApi } from './api/auth';

export default configureStore({
  reducer: {
    cart: cartReducer,
    user:userReducer,
    [authApi.reducerPath]:authApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware)
});
