import React from 'react'
import './styles.scss'
import { Flex, Stack } from '@chakra-ui/react'
import NavBarButtons from '../../molecules/NavBarButtons'
import Logo from '../../atoms/Logo'

const NavBar = () => {
    return (
        <Stack className="header">
            <Flex className="nav">
                <Logo />
                <NavBarButtons />
            </Flex>
        </Stack>
    )
}

export default NavBar
