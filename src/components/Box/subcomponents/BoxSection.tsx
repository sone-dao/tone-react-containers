import React from 'react'
import styles from '../Box.module.scss'

export interface IBoxSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  hat?: string
}

const BoxSection: React.FC<IBoxSectionProps> = ({
  children,
  style = {},
  className = styles.box,
}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default BoxSection
