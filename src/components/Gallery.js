/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/react'
import picture1 from 'shared/images/galeria1.jpeg'
import picture2 from 'shared/images/galeria2.jpeg'
import picture3 from 'shared/images/galeria3.jpeg'
import picture4 from 'shared/images/galeria4.jpg'
import picture5 from 'shared/images/galeria5.jpg'
import picture6 from 'shared/images/galeria6.jpg'
import picture7 from 'shared/images/galeria7.jpg'

const Gallery = () => {
  return (
    <div css={divImages}>
      {PICTURES.map((picture, index) => <img src={picture.src} key={index} />)}
    </div>
  )
}

export default Gallery

const divImages = css`
max-width:80%;
margin:1% auto 0 auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
grid-auto-rows: minmax(100px, auto);
@media only screen and (max-width: 780px){
  grid-template-columns: repeat(2, 1fr);
}
@media only screen and (max-width: 600px){
  grid-template-columns: repeat(1, 1fr);
}`

const PICTURES = [
  {
    src: picture1,
    title: ''
  },
  {
    src: picture2,
    title: ''
  },
  {
    src: picture3,
    title: ''
  },
  {
    src: picture4,
    title: ''
  },
  {
    src: picture5,
    title: ''
  },
  {
    src: picture6,
    title: ''
  },
  {
    src: picture7,
    title: ''
  }
]
