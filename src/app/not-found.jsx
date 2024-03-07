"use client"

import Link from 'next/link'

// Component to handle if the user enters the wrong URL and provides a link to retun home
const PageNotFound = () => {
  return (
    <div>
        <h2>Sorry the page you are looking for does not exist</h2>
        <Link href="/ ">Return Home</Link>

    </div>
  )
}

export default PageNotFound