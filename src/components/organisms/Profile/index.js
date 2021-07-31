import React from 'react'
import Avatar from '../../atoms/Avatar'
import { Box } from '@chakra-ui/layout'
import avatar from '../../../assets/alan.jpeg'
import './styles.scss'

const Profile = () => {
    return (
        <Box className="margin_top">
            <Avatar src={avatar} className="avatar" />
        </Box>
    )
}

export default Profile
