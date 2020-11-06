import React from 'react'
import { Route, Navigate } from 'react-router-dom'

type PropsType = {
  element: any
  redirectTo?: string
  isAuth: boolean
  path: string
}

export function PrivateRoute({
  element: Component,
  redirectTo = '/login',
  isAuth = false,
  path,
}: PropsType) {
  if (!isAuth) return <Navigate to={redirectTo} />
  return <Route path={path} element={<Component />} />
}
