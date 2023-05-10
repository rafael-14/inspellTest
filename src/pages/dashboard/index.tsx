//import { useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'

//import Trophy from 'src/views/dashboard/Trophy'
import InformationsCard from 'src/views/dashboard/InformationsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'

//import { useRouter } from 'next/router'
import { useSettings } from 'src/@core/hooks/useSettings'
import { defaultStatusIGateway } from 'src/@core/context/settingsContext'

const Dashboard = () => {

  //const router = useRouter()
  const { infoIgateway/*, reloadInfoIgateway */} = useSettings()

  const {
    statusServidorIPT,
    versionIgateway,
    statusIgateway,
    failsOnDay,
    terminals,
    marksLastDays,
    totalPedestrians
  } = infoIgateway || defaultStatusIGateway

//  useEffect(()=>{
//    if (statusIgateway=='UNLINKED') router.push('/login')
//    if (statusIgateway=='ERRO') router.push('/errorIgateway')
//  },[statusIgateway])

//  useEffect(() => {
     //const interval = setInterval(async() => {
//        reloadInfoIgateway()
     //}, 5000);

     //return () => clearInterval(interval);
//  }, []);

  return (
    infoIgateway && ['RUN','STOP'].includes(infoIgateway.statusIgateway || '')?
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <InformationsCard
              statusServidorIPT={statusServidorIPT}
              versionIgateway={versionIgateway}
              statusIgateway={statusIgateway}
              failsOnDay={failsOnDay}
              marksLastDays={marksLastDays}
              terminals={terminals}
              totalPedestrians={totalPedestrians}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <WeeklyOverview
              marksLastDays={marksLastDays}
              terminals={terminals}
            />
          </Grid>
          <Grid item xs={12}>
            <Table
              terminals={terminals}
            />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    :
      <></>
  )
}

export default Dashboard
