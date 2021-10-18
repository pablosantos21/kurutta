import mapa from 'shared/images/mapaZonas.png'
/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/react'

const Map = () => {
  return (
    <div css={css`width:100%;display:flex;justify-content:center`}>
      <img
        src={mapa} css={css`
      
      max-height:80vh;
      margin:1% 0;
      `}
      />
    </div>
  )
}

export default Map
