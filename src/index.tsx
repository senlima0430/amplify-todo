import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'
import {
  ChakraProvider,
  ColorModeScript,
  localStorageManager,
} from '@chakra-ui/core'

import App from './App'
import awsconfig from './aws-exports'
import reportWebVitals from './reportWebVitals'

Amplify.configure(awsconfig)

const rootNode = document.getElementById('root')

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider resetCSS colorModeManager={localStorageManager}>
      <App />
    </ChakraProvider>
  </>,
  rootNode
)

if (process.env.NODE_ENV === 'development') {
  reportWebVitals()
}
