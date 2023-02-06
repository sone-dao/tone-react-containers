import React from 'react'
import styles from './Box.module.scss'

export interface IBoxProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  maxWidth?: string
  hat?: string
}

const Box: React.FC<IBoxProps> = ({
  children,
  style = {},
  className = styles.box,
  maxWidth = '100%',
  hat,
}) => {
  return (
    <div className={styles.component} style={{ maxWidth }}>
      {hat && <div className={styles.hat} style={{ backgroundColor: hat }} />}
      <div className={className}>{children}</div>
    </div>
  )
}

export default Box
