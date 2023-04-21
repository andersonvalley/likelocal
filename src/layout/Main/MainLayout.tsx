import React from 'react'

import styles from './Main.module.scss'

interface IProps {
  children: React.ReactNode
}

function MainLayout({ children }: IProps) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </div>
    </main>
  )
}

export default MainLayout
