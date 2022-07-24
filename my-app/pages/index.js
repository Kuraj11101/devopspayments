import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HomeNavbar from '../components/HomeNavbar'
import HomeBody from '../components/HomeBody'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>TeamPod Finance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeNavbar />
      {/* <HomeBody /> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b style={{color: "blue"}}>TeamPod Finance</b>
          {/* <a href="https://nextjs.org"></a> */}
        </h1>



        <p className={styles.description}>
            Closely connecting the world financially with protected team modeled community safe financing method!
          {/* Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code> */}
         </p>

         <div className={styles.grid}>
          <Link href="/JoinATeam" className={styles.card}>
            <h2>Join A Team &rarr;</h2>
            <p>Find a TeamPod to join and enjoy a private socio-economic community.</p>
          </Link>

          <Link href="/CreateATeam" className={styles.card}>
            <h2>Create A Team &rarr;</h2>
            <p>Create a Team and invite team members to form a secure financial savings club as Finance Pods in a socio-economic community.</p>
          </Link>

          <Link
            href=""
            className={styles.card}
          >
            <h2>LP Funding &rarr;</h2>
            <p>Join an investment pool and invest your money with a 4% interest to be made by providing credit funds to secure TeamPod savings members.</p>
          </Link>

          <Link
            href=""
            className={styles.card}
          >
            <h2>Socio-Economic Community File Storage &rarr;</h2>
            <p>
              Have your community chat, files, images and protected and store separately off your device with your own private key.
            </p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/Tpod.png" alt="Logo" width={80} height={30} />
          </span>
        </Link>
      </footer>
    </div>
  )
}
