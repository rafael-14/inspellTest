// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'

//import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import CloudSyncOutline from 'mdi-material-ui/CloudSyncOutline'
import NoteCheckOutline from 'mdi-material-ui/NoteCheckOutline'
import ServerNetwork from 'mdi-material-ui/ServerNetwork'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const InformationsCard = (props: any) => {
  const {
    statusServidorIPT,
    versionIgateway,
    statusIgateway,
    failsOnDay,
    terminals,
    marksLastDays,
    totalPedestrians
   } = props

  function marksOnDay() {
    let total = 0
    terminals.forEach((terminal:any) => {total += marksLastDays[terminal.CODTERMINAL][6]})
    return total.toString()
  }


  const salesData: DataType[] = [
    {
      stats: totalPedestrians,
      title: 'Colaboradores',
      color: 'warning',
      icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: marksOnDay(),
      title: 'Marcações no dia',
      color: 'primary',
      icon: <NoteCheckOutline sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: statusServidorIPT == 'ONLINE' ? 'Online' : 'Offline',
      color: statusServidorIPT == 'ONLINE' ? 'info' : 'error',
      title: 'Servidor iPonto',
      icon: <CloudSyncOutline sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: statusIgateway == 'RUN' ? 'OK - Rodando' : 'Parado',
      color: statusIgateway == 'RUN' ? 'success' : 'error',
      title: `iGateway ${versionIgateway}`,
      icon: <ServerNetwork sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: failsOnDay,
      color: failsOnDay == 0 ? 'secondary' : 'error',
      title: 'Falhas no dia',
      icon: <AlertCircleOutline sx={{ fontSize: '1.75rem' }} />
    }
  ]

  const renderStats = () => {
    return salesData.map((item: DataType, index: number) => (
      <Grid item xs={12} sm={4} md={3} lg={2.4} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `${item.color}.main`
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ))
  }

  return (
    <Card>
      <CardContent>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default InformationsCard
