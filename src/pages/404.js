import React from 'react'

export default function Default404() {
  if (typeof window !== 'undefined') {
    return (
      <div>404</div>
   )
  }
  else return {}
}
