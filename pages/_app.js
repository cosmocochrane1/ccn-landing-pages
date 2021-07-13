import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { axiosRequestSettings } from '@/lib/axios-configurations'

import { get_landing_page_info } from '@/lib/landing-page-utilities'




axiosRequestSettings()
export default class MyApp extends App {

  static async getInitialProps(ctx) {
      const landing_page_info = {
          landing_page_info: get_landing_page_info(ctx.ctx.req.headers.host)
      }
      return landing_page_info
  }

  componentDidMount = async () => {};

  render() {
    const { Component, pageProps, landing_page_info } = this.props

    return (
      <React.Fragment>
        <Head>
        <link async crossOrigin="anonymous" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;500;600;700&display=swap" rel="stylesheet" />
        <link async crossOrigin="anonymous" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500;1,900&display=swap" rel="stylesheet" />
        <title>{`Care Connection | RPM`}</title>
        <meta name="Description" content="Care Connection’s HIPAA compliant web platform and cellular devices make it easier than ever to set up Remote Patient Monitoring" />
        <link rel="icon" href="/favicon.png" />

        </Head>    
        <Component {...pageProps } landing_page_info={landing_page_info} />
      </React.Fragment>
    )
  }
}


