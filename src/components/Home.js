/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom'
import servicios from 'shared/images/servicios.png'
import mapa from 'shared/images/mapa.png'
import contacto from 'shared/images/contacto.png'
import galeria from 'shared/images/galeria.png'
import nosotros from 'shared/images/nosotros.png'

const Home = () => {
  return (
    <div css={mainDiv}>
      <div css={innerDiv}>
        <div css={divCss}>
          <Link to='/servicios'>
            <img src={servicios} css={imageCss} />
            <h2>Servicios</h2>
          </Link>
        </div>
        <div css={divCss}>
          <Link to='/contacto'>
            <img src={contacto} css={imageCss} />
            <h2>Contacto</h2>
          </Link>
        </div>
        <div css={divCss}>
          <Link to='/mapa'>
            <img src={mapa} css={imageCss} />
            <h2>Mapa</h2>
          </Link>
        </div>
      </div>
      <div css={innerDiv}>
        <div css={divCss}>
          <Link to='/galeria'>
            <img src={galeria} css={imageCss} />
            <h2>Galería</h2>
          </Link>
        </div>
        <div css={divCss}>
          <Link to='/sobre-nosotros'>
            <img src={nosotros} css={imageCss} />
            <h2>Nosotros</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

const imageCss = css`
width:300px
`
const divCss = css`
display:flex;
flex-direction:column;
justify-content:center;
align-items:Center;
h2{
  text-align:center;
}
.a{
  color:black
}
`

const mainDiv = css`
min-height:80vh;
display:flex;
max-width:100vw;
justify-content:center;
flex-direction:column;

`

const innerDiv = css`
display:flex;
justify-content:space-evenly;
width:100%;
@media only screen and (max-width: 780px){
  flex-direction:column;
`
