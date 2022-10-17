import React from 'react'
import styles from './styles.module.css';

const Input = ({classes,value,onChange,placeholder,dark}) => {
  return (
    <input className={`${styles.input} ${classes} ${dark && styles.dark}`} value={value || ''} onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input