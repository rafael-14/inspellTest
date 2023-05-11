// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import { InfoIgateway, Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import PlacesDropdown from 'src/@core/layouts/components/shared-components/PlacesDropdown'

import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { cnpj, cpf } from 'magic-masks'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'
import Pause from 'mdi-material-ui/Pause'
import Play from 'mdi-material-ui/Play'
import { IconButton, Theme, useMediaQuery } from '@mui/material'
import ViewList from 'mdi-material-ui/ViewList'
import ViewDashboardOutline from 'mdi-material-ui/ViewDashboardOutline'
import router from 'next/router'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
  hidden: boolean
}

const AppBarContent = (props: Props) => {
  const { settings, saveSettings } = props

  const hiddenMd = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const { infoIgateway, setPlace, playPause, logsOn, changeView } = useSettings()

  const { cnpjCpf, placeId, places, statusIgateway } = infoIgateway as InfoIgateway

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        <img src='../../../images/pages/GatewayDashboard.png' />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {!hiddenMd && (
          <Tooltip title='CNPJ/CPF da conta' arrow>
            <Box marginRight='20px' sx={{ display: 'flex', alignItems: 'center' }}>
              <>
                {cnpjCpf && (
                  <Typography sx={{ fontWeight: 600, fontSize: '1.2rem !important' }}>
                    {cnpjCpf.length > 12 ? 'CNPJ: ' + cnpj(cnpjCpf) : 'CPF: ' + cpf(cnpjCpf)}
                  </Typography>
                )}
              </>
            </Box>
          </Tooltip>
        )}
        <Box marginRight='20px' sx={{ display: 'flex', alignItems: 'center' }}>
          <PlacesDropdown placeId={placeId} places={places} setPlace={setPlace} />
        </Box>
        <Tooltip title={settings.mode === 'dark' ? 'Modo claro' : 'Modo escuro'} arrow>
          <Box marginRight='20px' sx={{ display: 'flex', alignItems: 'center' }}>
            <ModeToggler settings={settings} saveSettings={saveSettings} />
          </Box>
        </Tooltip>
        <Tooltip title={logsOn ? 'DashBoard' : 'Logs'} arrow>
          <IconButton
            color='primary'
            aria-haspopup='true'
            onClick={() => {
              changeView()
              if (logsOn) {
                router.push('/dashboard')
              } else {
                router.push('/logs')
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>{logsOn ? <ViewDashboardOutline /> : <ViewList />}</Box>
          </IconButton>
        </Tooltip>
        <Tooltip title={statusIgateway == 'RUN' ? 'Pausar iGateway' : 'Rodar iGateway'} arrow>
          <IconButton color='inherit' aria-haspopup='true' onClick={playPause}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>{statusIgateway == 'RUN' ? <Pause /> : <Play />}</Box>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default AppBarContent
