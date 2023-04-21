import React from 'react'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'

import styles from './PlaceSlider.module.scss'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

interface IProps {
  children: React.ReactNode
}

function PlacesSlider({ children }: IProps) {
  return (
    <div className={styles.slider}>
      <button className={[styles.prev, styles.btn, 'prev'].join(' ')}>
        <MdKeyboardArrowLeft size={25} />
      </button>
      <button className={[styles.next, styles.btn, 'next'].join(' ')}>
        <MdKeyboardArrowRight size={25} />
      </button>
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        effect={'cards'}
        speed={300}
        modules={[Navigation]}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        direction={'horizontal'}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 1.5,
          },
          420: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
          },
          1300: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default PlacesSlider
