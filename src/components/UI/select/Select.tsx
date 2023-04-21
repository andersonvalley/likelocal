import { FC } from 'react'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { useAppSelector } from '../../../hooks/redux'
import styles from './Select.module.scss'

export const Select: FC = () => {
  const { cities, currentCity } = useAppSelector(state => state.city)

  return (
    <div className={styles.select}>
      <div className={styles.flex}>
        <span className={styles.current}>{currentCity?.name}</span>
        <MdKeyboardArrowDown />
      </div>
      <ul className={[styles.list, styles.noactive].join(' ')}>
        {cities.map(item => (
          <li key={item.name} className={styles.item}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
