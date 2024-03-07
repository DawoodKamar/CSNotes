"use client"

import Link from 'next/link'

// Error page main component

const error = ({error}) => {
  return (
    <div>
      {/* Pass on and display the error message and link the user to the home page */}
        <h2>{error.message}</h2>
        <Link href="/ ">Return Home</Link>

    </div>
  )
}

export default error