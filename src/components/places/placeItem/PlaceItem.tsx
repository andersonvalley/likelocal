import styles from './PlaceItem.module.scss'

import { FC } from 'react'
import { IPlace } from '../../../types/place.interface'
import FavoriteButton from '../../UI/button/FavoriteButton'

interface IProps {
  item: IPlace
}

export const PlaceItem: FC<IProps> = ({ item }) => {
  return (
    <article className={styles.place}>
      <a className={styles.link} href={item.slug}>
        <div className={styles.img}>
          <img src={item.images[0].image} alt="name"></img>
          <FavoriteButton />
        </div>
        <div>
          <p className={styles.category}>Музей</p>
          <h3 className={[styles.title].join(' ')}>{item.title}</h3>
          <span>от 1300 ₽</span>
        </div>
      </a>
    </article>
  )
}
