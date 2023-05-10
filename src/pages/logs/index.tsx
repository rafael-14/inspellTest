// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import LogsView from 'src/views/tables/LogsView'

const LogsTable = () => {
  return (
    <Card>
      <CardHeader title='Logs' titleTypographyProps={{ variant: 'h6' }} />
        <LogsView />
    </Card>
  )
}

export default LogsTable
