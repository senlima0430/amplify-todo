import React from 'react'
import { useColorMode, Tooltip, IconButton } from '@chakra-ui/core'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'

export function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Tooltip
      shouldWrapChildren
      label={`color mode: ${colorMode}`}
      placement="left"
    >
      <IconButton
        variant="ghost"
        aria-label="switch color mode"
        colorScheme={colorMode === 'light' ? 'black' : 'light'}
        icon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  )
}
