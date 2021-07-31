import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Avatar = (props) => {
    return (
        <img src={props.src} className={props.className} />
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired
}

export default Avatar
