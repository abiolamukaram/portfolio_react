import React from 'react'
import RootLayout from '../../layout/RootLayout'

const Footer = () => {
  return (
    <RootLayout className={"flex items-center justify-between flex-wrap gap-2"}>
    <p className="text-sm text-zinc-500 font-normal">
        © 2025 Abdulrahman Abiola Mukaram
    </p>
    <p className="text-sm text-zinc-500 font-normal">
      Powered by <span className="text-zinc-300">
        Labismah Global Resources Limited
      </span>
    </p>

</RootLayout>
  )
}

export default Footer
