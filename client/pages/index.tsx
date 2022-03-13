import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ApiContext from '../context/apiContext'
import { useContext } from 'react'


const Home: NextPage = () => {

  const apiData = useContext(ApiContext)

  return (
    <div className={styles.container}>
        <h3>{apiData}</h3>
    </div>
  )
}

export default Home
