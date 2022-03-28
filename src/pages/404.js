import React from 'react'

export default function Error() {
  if (typeof window !== 'undefined') {
    return (
      <div>404</div>
   )
  }
  else return {}
}
