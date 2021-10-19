/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/react'
import { Suspense, lazy, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Video from 'shared/images/intro.mp4'
import Preloader from 'widgets/Preloader'
const Header = lazy(() => import('./widgets/Header'))
const Home = lazy(() => import('./components/Home'))
const Services = lazy(() => import('./components/Services'))
const Contact = lazy(() => import('./components/Contact'))
const Map = lazy(() => import('./components/Map'))
const Us = lazy(() => import('./components/Us'))
const Gallery = lazy(() => import('./components/Gallery'))

function App () {
  const [intro, setIntro] = useState(true)

  function iOS () {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  }

  return (
    <Suspense fallback={Preloader}>
      {
        intro && !iOS() &&
          <div css={divVideoCss}>
            <video className='video' muted autoPlay src={Video} type='video/mp4' onEnded={() => setIntro(false)} />
          </div>
      }
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/servicios' component={Services} />
          <Route exact path='/contacto' component={Contact} />
          <Route exact path='/mapa' component={Map} />
          <Route exact path='/sobre-nosotros' component={Us} />
          <Route exact path='/galeria' component={Gallery} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App

const divVideoCss = css`
width:100%
;height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:white;
position:fixed;
top:0;
`
