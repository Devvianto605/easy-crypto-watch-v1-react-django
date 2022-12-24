import { createSlice} from "@reduxjs/toolkit";

const initialState = {
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state,action) => {
        state.cardList = action.payload
        
    },
    },
  },
);


export default profileSlice;