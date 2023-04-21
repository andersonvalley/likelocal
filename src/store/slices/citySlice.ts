import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cityService } from '../../service/city.service'
import { ICity } from '../../types/city.interface'
import { RootState } from '../store'

interface CityState {
  cities: ICity[]
  currentCity: ICity | undefined
  loading: boolean
  error: string
}

const initialState: CityState = {
  cities: [],
  currentCity: {
    name: 'Санкт-Петербург',
    slug: 'spb',
    coords: {
      lat: 59.939094999999966,
      lon: 30.315868,
    },
  },
  loading: false,
  error: '',
}

export const fetchCitites = createAsyncThunk('/getCities', async () => {
  const { data } = await cityService.getAll()
  return data
})

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, { payload }: PayloadAction<string>) => {
      state.currentCity = state.cities.find(item => (item.slug = payload))
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCitites.pending, state => {
        state.loading = true
      })
      .addCase(fetchCitites.rejected, state => {
        state.loading = false
      })
      .addCase(fetchCitites.fulfilled, (state, { payload }) => {
        state.loading = false
        state.cities = payload
      })
  },
})

export const { setCity } = citySlice.actions
export const selectCity = (state: RootState) => state.city
export default citySlice.reducer
