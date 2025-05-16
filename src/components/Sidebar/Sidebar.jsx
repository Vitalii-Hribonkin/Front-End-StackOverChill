import React from 'react'
import Navigation from '../Navigation/Navigation'
import Balance from '../Balance/Balance'
import Currency from '../Currency/Currency'

const Sidebar = () => {
  return (
      <>
          <Navigation />
          <Balance />
          <Currency/>
      </>
  )
}

export default Sidebar