import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState} from 'react'
import Web3Modal from "web3modal"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  )
}
