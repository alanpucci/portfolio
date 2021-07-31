import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.scss';
import { Button } from '@chakra-ui/button';

const HeaderLink = (props) => {
    return (
        <NavLink exact={props.exact} to={props.to}>
            <Button>
                {props.title}
            </Button>
        </NavLink>
    )
}

HeaderLink.propTypes = {
    exact: PropTypes.bool,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default HeaderLink
