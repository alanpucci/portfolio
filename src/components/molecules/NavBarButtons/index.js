import React from 'react'
import { HStack } from '@chakra-ui/layout'
import HeaderLink from '../../atoms/HeaderLink'

const NavBarButtons = () => {
    return (
        <HStack>
            <HeaderLink title="About" to="/" exact />
            <HeaderLink title="Resume" to="/resume" />
            <HeaderLink title="Projects" to="/projects" />
            <HeaderLink title="Contact me!" to="/contact" />
        </HStack>
    )
}

export default NavBarButtons
