import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { placeService } from '../../service/place.service'
import { IPlace } from '../../types/place.interface'
import { RootState } from '../store'

interface PlaceState {
  restorants: IPlace[]
  museums: IPlace[]
  attractions: IPlace[]
  loading: boolean
  error: string
}

const initialState: PlaceState = {
  restorants: [],
  museums: [],
  attractions: [],
  loading: false,
  error: '',
}

export const fetchPlaces = createAsyncThunk('getPlaces', async (obj: string[]) => {
  const [cityName, limit, categotyPlace, fields] = obj

  const { data } = await placeService.getPlaces(cityName, +limit, categotyPlace, fields)
  return data.results
})

export const placeSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlaces.pending, state => {
        state.loading = true
      })
      .addCase(fetchPlaces.rejected, state => {
        state.loading = false
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.loading = false
        const typePlace = action.meta.arg[2]

        if (typePlace === 'museums') {
          state.museums = action.payload
          return
        } else if (typePlace === 'restaurants') {
          state.restorants = action.payload
          return
        }

        state.attractions = action.payload
      })
  },
})

export const place = (state: RootState) => state.place
export default placeSlice.reducer
