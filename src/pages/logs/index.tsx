// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import LogsView from 'src/views/tables/LogsView'

import { useTheme } from '@mui/material/styles'

const LogsTable = () => {
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title='Logs'
        titleTypographyProps={{ variant: 'h6', color: theme.palette.primary.contrastText }}
        sx={{ pb: '12px', pt: '5px', bgcolor: theme.palette.primary.main }}
      />
      <LogsView />
    </Card>
  )
}

export default LogsTable
