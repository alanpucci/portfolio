import { Box } from '@chakra-ui/react'
import React from 'react'
import './styles.scss'

const GlassText = () => {
    return (
        <Box className="container">
            <Box className="col-12 col-sm-10 col-md-6 glass_card">
                <h2 className="subtitle">Hey!</h2>
                <h1 className="title">I'm Alan, web developer</h1>
                <p>Take a look at my projects!</p>
            </Box>
        </Box>
    )
}

export default GlassText
