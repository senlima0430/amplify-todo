import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthContext } from 'context/Auth'
import { PrivateRoute } from './PrivateRoute'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { NotFound } from 'pages/NotFound'
import { Confirm } from 'pages/Confirm'
import { Dashboard } from 'pages/Dashboard'

export function Router() {
  const auth = useContext(AuthContext)

  const isAuth = auth.state === 'signedIn'

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="confirm" element={<Confirm />} />
      <PrivateRoute isAuth={isAuth} path="dashboard" element={Dashboard} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
