import React, { useEffect, useState, createContext, ReactNode } from 'react'
import { Hub, Auth } from 'aws-amplify'

type PropsType = {
  children: ReactNode
}

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }: PropsType) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log('Current user: ', user)
        localStorage.setItem('horaro-logged', 'signedIn')
        setAuth({ state: 'signedIn', user })
      })
      .catch(err => localStorage.getItem('horaro-logged'))
      .then(
        cachedAuthState => cachedAuthState === 'signedIn' && Auth.signOut()
      )
  }, [])

  useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      const { event, data } = payload
      if (event === 'signOut') {
        setAuth({ state: event, user: null })
        localStorage.deleteItem('horaro-logged')
        return
      }
      localStorage.setItem('horaro-logged', 'signedIn')
      setAuth({ state: event, user: data })
    })
  }, [])

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
