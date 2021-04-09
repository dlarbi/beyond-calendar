import Link from 'next/link';
import Head from 'next/head'
import Constants from './../constants/constants.js'
import styles from './Index.module.scss';
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.index}>
      <Image src={Constants.LogoPath} width="200" height="100" alt="Beyond Pricing Logo" />
      <h1>Beyond Pricing Frontend Development Exercise</h1>
      <Link href={`/dashboard/${Constants.DefaultDashboardId}`}>
        <a className={styles.entryLink}>View our Listings</a>
      </Link>
    </div>
  )
}
