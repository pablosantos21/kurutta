/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav css={navCss}>
      <h1><Link to='/' css={css`color:white`}>Kurutta Couriers</Link></h1>
      <h1><a href='tel:+34644710447' css={css`color:white`}>644 710 447</a></h1>
    </nav>
  )
}

export default Header

const navCss = css`
display:flex;
justify-content:space-between;
padding:0 5vw;
max-width:90vw;
margin:Auto;
background-color:#FF7878;
@media only screen and (max-width: 780px){
  flex-direction:column;
  align-items:Center
}
`
