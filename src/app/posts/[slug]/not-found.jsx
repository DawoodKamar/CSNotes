"use client"

import Link from 'next/link'

const PageNotFound = () => {
  return (
    <div>
        <h2>Sorry the page you are looking for does not exist</h2>
        <Link href="/ ">Return Home</Link>

    </div>
  )
}

export default PageNotFound