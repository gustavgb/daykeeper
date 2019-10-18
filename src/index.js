import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from 'features/app/container'
import store, { history } from 'store'
import theme from 'theme'
import dateformat from 'dateformat'

import 'react-datepicker/dist/react-datepicker.css'

dateformat.i18n = {
  dayNames: [
    'Søn', 'Man', 'Tirs', 'Ons', 'Tors', 'Fre', 'Lør',
    'Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'
  ],
  monthNames: [
    'jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec',
    'januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'
  ],
  timeNames: [
    'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
  ]
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
  // eslint-disable-next-line no-undef
  , document.getElementById('root'))
