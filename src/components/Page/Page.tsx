import React from 'react'
import styles from './Page.module.scss'

export interface IPageProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

const Page: React.FC<IPageProps> = ({
  children,
  style = {},
  className = styles.page,
}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default Page
