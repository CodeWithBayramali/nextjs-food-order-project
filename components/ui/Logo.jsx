import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='text-4xl font-dancing font-bold'>
      <Link href='/' passHref>Feane</Link>
    </div>
  )
}

export default Logo