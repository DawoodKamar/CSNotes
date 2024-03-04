"use client"

import Link from 'next/link'

const error = ({error}) => {
  return (
    <div>
      {/* Sorry the page you are looking for does not exist */}
        <h2>{error.message}</h2>
        <Link href="/ ">Return Home</Link>

    </div>
  )
}

export default error