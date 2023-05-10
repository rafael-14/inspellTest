// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const FooterContent = () => {

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant='caption'>
        iGateway Dashboard - Versão Beta 0.0.01 - Copyright © 2023 Inspell Softwares. Todos os direitos reservados.
      </Typography>
    </Box>
  )
}

export default FooterContent
