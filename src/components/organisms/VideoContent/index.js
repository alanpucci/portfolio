import { Box } from '@chakra-ui/react'
import React from 'react'
import Video from '../../atoms/Video'
import videomp4 from '../../../video/network.mp4'
import GlassText from '../../molecules/GlassText'
import './styles.scss'

const VideoContent = () => {
    return (
        <Box className="video_content">
            <Video src={videomp4} />
            <GlassText />
        </Box>
    )
}

export default VideoContent
