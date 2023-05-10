// ** React Imports
import { useState, SyntheticEvent, Fragment, ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiMenu, { MenuProps } from '@mui/material/Menu'
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MapMarkerOutline from 'mdi-material-ui/MapMarkerOutline'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'
import Tooltip from '@mui/material/Tooltip'

// ** Styled Menu component
const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: 250,
    overflow: 'hidden',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  '& .MuiMenu-list': {
    padding: 0
  }
}))

// ** Styled MenuItem component
const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`
}))

const styles = {
  maxHeight: 349,
  '& .MuiMenuItem-root:last-of-type': {
    border: 0
  }
}

// ** Styled PerfectScrollbar component
const PerfectScrollbar = styled(PerfectScrollbarComponent)({
  ...styles
})

// ** Styled component for the title in MenuItems
const MenuItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  flex: '1 1 100%',
  overflow: 'hidden',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  marginBottom: theme.spacing(0.75)
}))

// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = styled(Typography)<TypographyProps>({
  flex: '1 1 100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

const PlacesDropdown = (props:any) => {

  const { places, placeId, setPlace } = props
  // ** States
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)

  // ** Hook
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = (event: SyntheticEvent) => {
    setAnchorEl(null)
    if (event.currentTarget.id) setPlace(event.currentTarget.id)
  }

  const ScrollWrapper = ({ children }: { children: ReactNode }) => {
    if (hidden) {
      return <Box sx={{ ...styles, overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return (
        <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>{children}</PerfectScrollbar>
      )
    }
  }

  function getPlace(){
    if (places.length==0) {
      return '---'
    } else {
      if (placeId=='ALL') return 'Todos'
      const place = (places as any).find((place:any)=>place.ID==placeId)
      return place ? place.DESCRICAO : 'Todos'
    }
  }

  return (
    <Fragment>
      <Tooltip  title={places.length==0 ? 'Nenhum local cadastrado' : 'Local do iGateway'} arrow>
        <span>
        <IconButton
          color='primary'
          aria-haspopup='true'
          onClick={handleDropdownOpen}
          aria-controls='customized-menu'
          disabled={places.length==0}
        >
          <MapMarkerOutline />
          <Typography sx={{ fontWeight: 600, fontSize: '1.2rem !important' }}>
                {getPlace()}
          </Typography>
        </IconButton>
        </span>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <ScrollWrapper>
          <MenuItem onClick={handleDropdownClose} key={'ALL'} id={'ALL'}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mx: 4, flex: '1 1', display: 'flex', overflow: 'hidden', flexDirection: 'column' }}>
                <MenuItemTitle>Código: TODOS</MenuItemTitle>
                <MenuItemSubtitle variant='body2'>Todos os locais</MenuItemSubtitle>
              </Box>
            </Box>
          </MenuItem>
          { places && places.map((place:any)=>{
            return (
              <MenuItem onClick={handleDropdownClose} key={place.ID} id={place.ID}>
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mx: 4, flex: '1 1', display: 'flex', overflow: 'hidden', flexDirection: 'column' }}>
                  <MenuItemTitle>Código: {place.ID}</MenuItemTitle>
                  <MenuItemSubtitle variant='body2'>{place.DESCRICAO}</MenuItemSubtitle>
                </Box>
              </Box>
              </MenuItem>
            )
          })}
        </ScrollWrapper>
      </Menu>
    </Fragment>
  )
}

export default PlacesDropdown
