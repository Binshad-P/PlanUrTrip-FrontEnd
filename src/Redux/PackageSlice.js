import {  createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getPackages=createAsyncThunk('Packages/getPackages',async()=>{
    try {
        const response = await axios.get('http://localhost:6001/trip/packageDetails');
     
        return response.data;
      } catch (error) {
        throw Error('Error fetching data');
      }
})


export const getSinglePackage=createAsyncThunk('Packages/getSinglePackage',async(packageId)=>{
    try {
        const { packageId } = useParams();
        const response = await axios.get(`http://localhost:6001/trip/singlePackageDetails/${packageId}`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        throw Error('Error fetching data');
      }
})


const packageSlice = createSlice({
    name: 'Packages',
    initialState: {
      data: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getPackages.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getPackages.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload.package_details;
        })
        .addCase(getPackages.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default packageSlice.reducer;