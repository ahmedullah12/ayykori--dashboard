import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit"

const apiSlice = createSlice({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL
    }),
    endPoints: (builder) => ({})
});

export default apiSlice;