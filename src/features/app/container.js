import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Timeline from 'features/timeline/containers/timeline'
import Main from 'features/app/components/main'

// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: Roboto;
  }

  @font-face {
    font-family: Roboto;
    src: url(fonts/Roboto-Regular.ttf);
  }

  .react-datepicker__time-list {
    padding: 0;
    padding-right: 0 !important;
  }
`

const App = () => (
  <Main>
    <GlobalStyle />
    <Timeline />
  </Main>
)

export default App
