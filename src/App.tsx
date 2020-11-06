import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Router } from 'routes'
import { AuthProvider } from 'context/Auth'

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}
