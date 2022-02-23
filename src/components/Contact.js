/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/react'

const Contact = () => {
  return (
    <div css={mainCSS}>
      <div>
        <p css={pCSS}>INFO: <a href='tel:+34644710447'>644 710 447</a></p>
        <p css={pCSS}>PEDIDOS: <a href='tel:+34644710447'>644 710 447</a></p>
        <p css={pCSS}>MAIL: <a href='mailto:kurutta.couriers.vlc@gmail.com' >kurutta.couriers.vlc@gmail.com</a></p>
      </div>
      <div>
        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24630.511782395417!2d-0.378569!3d39.496115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb87a0eccee7a1ce2!2sMensajer%C3%ADa%20urgente%20Kurutta%20Couriers%20Valencia!5e0!3m2!1ses!2ses!4v1634492657131!5m2!1ses!2ses' css={css`width:600px;height:450px;border:0`} allowFullScreen='' loading='lazy' />
      </div>
    </div>
  )
}

export default Contact

const mainCSS = css`
display:flex;
justify-content:space-around;
align-items:center;
margin-top:3%;
@media only screen and (max-width: 780px){
  flex-direction:column;
}

`

const pCSS = css`
font-size:2rem;
@media only screen and (max-width: 780px){
  font-size:1.5rem;
  text-align:center
}
`
