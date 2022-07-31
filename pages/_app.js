import '../styles/globals.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { render } from 'react-dom';

const ethers = require("ethers")

function MyApp({ Component, pageProps }) {

  const [isLoggedIn, setLoggedIn] = useState(false)

  async function signIn(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    if (signer){
      setLoggedIn(true)
    }
  }

  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Rainbow Six Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
          
          
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
    
}

export default MyApp