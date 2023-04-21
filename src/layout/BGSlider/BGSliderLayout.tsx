import React from 'react'

import styles from './BgSlider.module.scss'

import { IoIosArrowForward } from 'react-icons/io'

interface IProps {
  children: React.ReactNode
}

const BgSliderLayout = ({ children }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.link} href="/">
        <h2 className={styles.title}>
          Рестораны и кафе <IoIosArrowForward size={20} className={styles.icon} />
        </h2>
        <span className={styles.all}>Все</span>
      </a>
      {children}
    </div>
  )
}

export default BgSliderLayout
