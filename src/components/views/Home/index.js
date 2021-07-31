import React from 'react'
import { Stack } from '@chakra-ui/layout'
import './styles.scss'
import VideoPresentation from '../../templates/VideoPresentation'

const Home = () => {
    return (
        <Stack className="content">
            <VideoPresentation />
        </Stack>
    )
}

export default Home
