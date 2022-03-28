import React from 'react'

export default function AboutUs() {
  if (typeof window !== 'undefined') {
    return (
      <div>aboutus</div>
   )
  }
  else return {}
}
