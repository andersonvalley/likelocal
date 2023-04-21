import { Select } from '../UI/select/Select'

import styles from './CityInfo.module.scss'

function CityInfo() {
  return (
    <section className={styles.city}>
      <h1 className={styles.title}>
        <Select />
        <span>
          Один из самых европейских городов России со множеством исторических мест, изобретательными
          ресторанами и выходом к морю.
        </span>
      </h1>
      <div className={styles.photos}>
        <a href="/" className={styles.link}>
          <div className={styles.img}>
            <img
              src="https://avatars.dzeninfra.ru/get-zen_doc/1362552/pub_5d5adf157b4bd200ac837df1_5d5ae5254735a600af82a483/scale_1200"
              alt="name"
            ></img>
          </div>
          <span>Казанский собор</span>
        </a>
        <a href="/" className={styles.link}>
          <div className={styles.img}>
            <img
              src="https://avatars.dzeninfra.ru/get-zen_doc/1362552/pub_5d5adf157b4bd200ac837df1_5d5ae5254735a600af82a483/scale_1200"
              alt="name"
            ></img>
          </div>
          <span>Казанский собор</span>
        </a>
        <a href="/" className={styles.link}>
          <div className={styles.img}>
            <img
              src="https://avatars.dzeninfra.ru/get-zen_doc/1362552/pub_5d5adf157b4bd200ac837df1_5d5ae5254735a600af82a483/scale_1200"
              alt="name"
            ></img>
          </div>
          <span>Казанский собор</span>
        </a>
      </div>
    </section>
  )
}

export default CityInfo
