import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Sorry the page you are looking for does not exist</h2>
        <Link href="/ ">Return Home</Link>

    </div>
  )
}

export default NotFound