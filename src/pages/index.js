import React from 'react'
import Layout from '../templates/homepage/index.js'

export default function Index() {
  if (typeof window !== 'undefined') {
    return (
      <Layout />
    )
  }
  else return {}
}
