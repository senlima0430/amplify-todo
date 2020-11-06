import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import Amplify from 'aws-amplify'
import {
  ChakraProvider,
  ColorModeScript,
  localStorageManager,
} from '@chakra-ui/core'

import { App } from './App'
import awsconfig from './aws-exports'
import reportWebVitals from './reportWebVitals'

Amplify.configure(awsconfig)

const rootNode = document.getElementById('root')

ReactDOM.render(
  <RecoilRoot>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider resetCSS colorModeManager={localStorageManager}>
      <App />
    </ChakraProvider>
  </RecoilRoot>,
  rootNode
)

if (process.env.NODE_ENV === 'development') {
  reportWebVitals()
}
