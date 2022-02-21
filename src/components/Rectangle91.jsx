import React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';



function Rectangle91() {
    return (
        <div className="info-container">
            <p className="heading"> Laura Smith</p>
            <p className="heading-designation"> Front-end Developer</p>
            <p className="email">lsmith@noemail.com</p>

            {/* <div className="btn-container">
                <Button className = "btn-email" variant="outlined" startIcon={<EmailIcon />}>Email </Button>
                <Button className = "btn-linkedIn" variant="contained" startIcon={<LinkedInIcon />}>LinkedIn</Button>
            </div> */}

            <Stack direction="row" spacing={2} className="btn-container" >
                <Button className="btn-email" variant="outlined" startIcon={<EmailIcon />} sx={{
                backgroundColor: 'white', color: 'black',
            }}>Email </Button>
                <Button className="btn-linkedIn" variant="contained" startIcon={<LinkedInIcon />}>LinkedIn</Button>
            </Stack>

        </div>
    );
}

export default Rectangle91;