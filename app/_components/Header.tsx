"use client"
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="bg-black">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Image src='/logo.svg' alt='logo'
    width={100}
    height={100}
    />

    <div className="flex flex-1 items-center justify-end md:justify-between">
      

      
    </div>
  </div>
</header>
  )
}

export default Header