import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useColorMode, Tooltip, IconButton } from '@chakra-ui/core'
import { Auth } from 'aws-amplify'

export function LogoutButton() {
  const navigate = useNavigate()
  const { colorMode } = useColorMode()

  async function handleLogout() {
    await Auth.signOut()
    navigate('/login')
  }

  return (
    <Tooltip shouldWrapChildren label="logout" placement="left">
      <IconButton
        variant="ghost"
        aria-label="logout"
        colorScheme={colorMode === 'light' ? 'black' : 'light'}
        icon={<FiLogOut />}
        onClick={() => handleLogout()}
      />
    </Tooltip>
  )
}
