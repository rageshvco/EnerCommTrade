import { useState, useEffect } from 'react'
import Web3 from 'web3'

const [account, setAccount] = useState(null)
let [web3, setWeb3] = useState(null)
useEffect(() => {
  checkAccount()
}, [])

// active to invoke to connect to wallet account
async function activate() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      checkAccount()
    } catch (err) {
      console.log('client or user did not add account...', err)
    }
  }
}

// check if account is already connected
async function checkAccount() {
  let web3 = new Web3(window.ethereum)
  setWeb3(web3)
  const accounts = await web3.eth.getAccounts()
  setAccount(accounts[0])
}
