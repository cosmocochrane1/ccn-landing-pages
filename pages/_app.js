import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { axiosRequestSettings } from '@/lib/axios-configurations'

axiosRequestSettings()
export default class MyApp extends App {

  componentDidMount = async () => {};

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
        <link async crossOrigin="anonymous" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;500;600;700&display=swap" rel="stylesheet" />
        <link async crossOrigin="anonymous" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500;1,900&display=swap" rel="stylesheet" />

        </Head>    
        <Component {...pageProps } />
      </React.Fragment>
    )
  }
}





