/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/react'
import { useEffect } from 'react'
import { NOSOTROS } from 'shared/data/nosotros'
import joel from 'shared/images/joel.jpg'

const Us = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div css={mainDiv}>
      <div css={column}>
        <img src={joel} css={css`max-width:100%`} />
      </div>
      <div css={column}>
        <h2>
          Quiénes Somos
        </h2>
        {NOSOTROS.map((el, index) =>
          <p key='index' css={css`margin-top:3%;max-width:100%`}>{el}</p>
        )}
      </div>
    </div>
  )
}

export default Us

const mainDiv = css`
display:flex;
flex-direction:row;
@media only screen and (max-width: 780px){
  flex-direction:column
}`

const column = css`
  max-width:50%;
  
  margin:2.5%;
  @media only screen and (max-width: 780px){
    max-width:100%;
  }
`
