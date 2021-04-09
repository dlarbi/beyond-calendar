import Link from 'next/link';
import Head from 'next/head'
import Constants from './../constants/constants.js'

export default function Home() {
  return (
    <div>
      <h1>Beyond Pricing Frontend Development Exercise</h1>
      <Link href={`/dashboard/${Constants.DefaultDashboardId}`}>
        <a>View our Listings</a>
      </Link>
    </div>
  )
}
