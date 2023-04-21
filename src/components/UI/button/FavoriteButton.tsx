import { GrFavorite } from 'react-icons/gr'
import styles from './Favorit.module.scss'

export default function FavoriteButton() {
  return (
    <button className={[styles.favorite, styles.noactive].join(' ')}>
      <GrFavorite size={17} className={styles.icon} />
    </button>
  )
}
