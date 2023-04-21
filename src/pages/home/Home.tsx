import { SwiperSlide } from 'swiper/react'
import PlacesSlider from '../../components/places/placeSlider/PlacesSlider'
import BgSliderLayout from '../../layout/BGSlider/BGSliderLayout'

import { useEffect } from 'react'
import { Loader } from '../../components/UI/loader/Loader'
import CityInfo from '../../components/cityInfo/CityInfo'
import { PlaceItem } from '../../components/places/placeItem/PlaceItem'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCitites } from '../../store/slices/citySlice'
import { fetchPlaces } from '../../store/slices/placeSlice'
import styles from './Home.module.scss'

const placeByOnePage = '15'

enum enumCategories {
  'attractions' = 'attractions',
  'restaurants' = 'restaurants',
  'museums' = 'museums',
}

enum enumFields {
  fields = 'title,slug,id,images',
}

export const Home = () => {
  const dispatch = useAppDispatch()
  const { museums, restorants, attractions, loading } = useAppSelector(state => state.place)
  const { currentCity } = useAppSelector(state => state.city)

  useEffect(() => {
    dispatch(fetchCitites())

    if (!currentCity) return
    dispatch(fetchPlaces([currentCity?.slug, placeByOnePage, enumCategories.restaurants, enumFields.fields]))
    dispatch(fetchPlaces([currentCity?.slug, placeByOnePage, enumCategories.museums, enumFields.fields]))
    dispatch(fetchPlaces([currentCity?.slug, placeByOnePage, enumCategories.attractions, enumFields.fields]))
  }, [dispatch, currentCity])

  return (
    <>
      <CityInfo />
      <div className={styles.bg}>
        <BgSliderLayout>
          <PlacesSlider>
            {loading && <Loader size={6} />}
            {restorants.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <PlaceItem item={item} />
                </SwiperSlide>
              )
            })}
          </PlacesSlider>
        </BgSliderLayout>

        <BgSliderLayout>
          <PlacesSlider>
            {loading && <Loader size={6} />}
            {museums.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <PlaceItem item={item} />
                </SwiperSlide>
              )
            })}
          </PlacesSlider>
        </BgSliderLayout>

        <BgSliderLayout>
          <PlacesSlider>
            {loading && <Loader size={6} />}
            {attractions.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <PlaceItem item={item} />
                </SwiperSlide>
              )
            })}
          </PlacesSlider>
        </BgSliderLayout>
      </div>
    </>
  )
}
