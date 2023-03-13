import React from 'react'
import styles from './Portfolio.module.css'
import home from './img/Vector.png'
import Button from './UX/Button'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.vlog}>
        <img src={home} alt="" />
        <p className={styles.slesh}> / </p>
        <p className={styles.vlogPort}>Портфолио</p>
      </div>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>Портфолио</h1>
      </div>
      <div className={styles.btns}>
        <Button text="Дизайнерские обои" />
        <Button text="Виниловые обои" />
        <Button text="Фирменные обои" />
      </div>
    </div>
  )
}

export default Portfolio
