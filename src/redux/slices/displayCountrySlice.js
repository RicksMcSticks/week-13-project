import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry"

export const dispayCountrySlice = createSlice({
    name: "displayCountry",
    initialState: {
        value: initialCountry,
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload;
        },
        deleteDisplayCountry: (state) => {
            state.value = null;
        },
    },
});

export const { setDisplayCountry, deleteDisplayCountry} = 
    dispayCountrySlice.actions;

export const selectDisplay = (state) => state.displayedCountry.value;

export default dispayCountrySlice.reducer;