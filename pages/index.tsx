import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


     {/* Header */}
     <Header />

     {/* Hero */}

     {/* About */}

     {/* Experience */}

     {/* Skills */}

     {/* Projects */}

     {/* Contact me */}
    </div>
  )
}

export default Home
