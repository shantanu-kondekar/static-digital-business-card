import React from 'react';
import '../component-styles/socialicons.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';


function SocialIcons(props) {
    return (
        <Stack direction="row" spacing={2} className="social-icons" >

            <TwitterIcon sx={{ fontSize: 40, backgroundColor: 'gray' }} />
            <FacebookIcon sx={{ fontSize: 40, backgroundColor: 'gray' }} />
            <InstagramIcon sx={{ fontSize: 40, backgroundColor: 'gray' }} />
            <GitHubIcon sx={{ fontSize: 40, backgroundColor: 'gray' }} />

        </Stack>
    );
}

export default SocialIcons;