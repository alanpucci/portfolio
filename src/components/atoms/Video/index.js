import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

const Video = (props) => {
    return (
        <video src={props.src} autoPlay loop muted className={`video ${props.className}`} />
    )
}

Video.propTypes = {
    src: PropTypes.string.isRequired
}

export default Video
