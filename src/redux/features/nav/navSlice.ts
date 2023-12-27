import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getProviders } from 'next-auth/react'
import type { RootState } from '../../store'

// Define a type for the slice state
export interface NavState {
  isLoggedIn: boolean,
  providers: any | null
}

// Define the initial state using that type
const initialState: NavState = {
  isLoggedIn: false,
  providers: null
}

export const fetchProviders = createAsyncThunk(
  'nav/fetchProviders',
  async () => {
    const response = await getProviders()
    return response
  }
)

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProviders.fulfilled, (state, action) => {
      state.providers = action.payload
      // state.isLoggedIn = true
    }),
    builder.addCase(fetchProviders.rejected, (state) => {
      // state.isLoggedIn = false
    })
  }
})

export const { } = navSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoggedIn = (state: RootState) => state.nav.isLoggedIn
export const selectProviders = (state: RootState) => state.nav.providers

export default navSlice.reducer
