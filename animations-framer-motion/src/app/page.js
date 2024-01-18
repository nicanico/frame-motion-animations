'use client'
import { useState } from 'react'
import styles from './page.module.scss'
import { useMousePosition } from './utils/useMousePosition'
import { motion } from 'framer-motion'

export default function Home() {

  const { x, y } = useMousePosition()
  const [isHovered, setIsHovered] = useState(false)

  const size = isHovered ? 400 : 40

  return (
    <main className={styles.main}>
      <motion.div className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
          transition: {type: "tween", ease: "backOut"}

        }}
      >
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          A visual designer - with skills that haven&apos;t been replaced by A.I (yet)
          - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>I&apos;m a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>

    </main>
  )
}
