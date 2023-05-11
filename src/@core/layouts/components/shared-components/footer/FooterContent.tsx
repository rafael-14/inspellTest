// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const FooterContent = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      <Typography color='inherit' fontWeight={500}>
        Copyright © Inspell Softwares 2023
      </Typography>
    </Box>
  )
}

export default FooterContent
