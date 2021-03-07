import React from 'react'
import styles from './styles.module.css'

export { default as Button } from './components/Button';
export { default as Video } from './components/Video';
export { default as Card } from './components/Card';


export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
