/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/react'
import { SERVICIOS } from 'shared/data/servicios'

const Services = () => {
  return (
    <div css={divCss}>
      {
        SERVICIOS.map((service, index) =>
          <div key='index' css={serviceCss}>
            <img src={service.imageURL} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        )
      }
    </div>
  )
}

export default Services

const divCss = css`
width:80%;
margin:0 auto 3% auto;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 40px;
grid-auto-rows: minmax(100px, auto);
@media only screen and (max-width: 780px){
  grid-template-columns: repeat(2, 1fr);
}
@media only screen and (max-width: 600px){
  grid-template-columns: repeat(1, 1fr);
}
`

const serviceCss = css`
display;flex;
width:100%;
margin:auto;
height:100%;
justify-content:flex-start;
text-align:center;

`
