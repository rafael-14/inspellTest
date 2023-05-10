// ** MUI Imports
import { PaletteMode } from '@mui/material'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import Cog from 'mdi-material-ui/Cog'
import Tooltip from '@mui/material/Tooltip'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const SettingsModal = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props

  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({ ...settings, mode })
  }

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <Tooltip title="Configurações" arrow>
      <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
        <Cog />
      </IconButton>
    </Tooltip>
  )
}

export default SettingsModal
