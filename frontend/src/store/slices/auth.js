import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  token: null,
  refreshToken: null,
  account: {
    user: {
        id: null,
        email: null,
        username: null,
        is_active: false,
        created: null,
        updated: null,
      },
      access: null,
      refresh: null,

  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens: (state,action) => {
        state.refreshToken = action.payload.refreshToken;
        state.token = action.payload.token;
    },
    setAccount: (state,action) => {
        state.account = action.payload;
    },
    setLogout: (state) => {
        state.account = null;
        state.refreshToken = null;
        state.token = null;
      },
    },
  },
);

export default authSlice;