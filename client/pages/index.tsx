import type { NextPage } from 'next'
import { useContext } from 'react'
import styles from '../styles/Home.module.css'
import { ApiContext } from '../context/apiContext'


const Home: NextPage = () => {

  const { element } = useContext(ApiContext);
  
 console.log(element)
  return (
    <div className={styles.container}>
      {element.map((ele: any)=>{
        return <p>{ele.id}</p>
      })} 
    </div>
  )
}

export default Home
