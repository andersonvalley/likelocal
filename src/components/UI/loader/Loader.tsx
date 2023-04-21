import { FC } from 'react'
import ContentLoader from 'react-content-loader'
import styles from './Loader.module.scss'

interface Props {
  size: number
}

export const Loader: FC<Props> = ({ size }) => {
  const array = new Array(size).fill(1)

  return (
    <div className={styles.loader}>
      {array.map((_, index) => {
        return (
          <ContentLoader
            className={styles.svg}
            key={index}
            speed={3}
            width={200}
            height={350}
            viewBox="0 0 200 350"
            backgroundColor="#f2f2f2"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="3" rx="20" ry="20" width="179" height="270" />
            <rect x="2" y="278" rx="7" ry="7" width="88" height="16" />
            <rect x="2" y="300" rx="8" ry="8" width="150" height="20" />
            <rect x="4" y="325" rx="8" ry="8" width="77" height="17" />
          </ContentLoader>
        )
      })}
    </div>
  )
}
