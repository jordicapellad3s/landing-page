import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => (
  <footer className="flex items-center justify-center gap-8 p-20 text-white bg-black">
    <Image src="/assets/logo.svg" width={30} height={30} alt="Logo" />
    <Link href="/terms">Terms</Link>
    <Link href="/privacy">Privacy Policiy</Link>
  </footer>
)

export default Footer
