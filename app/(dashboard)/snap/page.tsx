'use client'

import { useState } from 'react'
import Image from 'next/image'

const SnapPage = () => {
  const imgColumns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <main className="">
      <div className="text-4xl">Snap</div>
      <div className="snap-manditory snap-x flex overflow-hidden hover:overflow-x-auto scrollNew">
        {imgColumns.map((myButton, index) => (
          <Image
            className="snap-center rounded-full p-6"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            alt="image"
            width={1000}
            height={1000}
            key={index}
          />
        ))}
      </div>
      <p className="text-xs font-mono pt-1">Hover for scrollbar</p>
    </main>
  )
}

export default SnapPage
