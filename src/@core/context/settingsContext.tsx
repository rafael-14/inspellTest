// ** React Imports
import { createContext, useState, ReactNode, useEffect } from 'react'

// ** MUI Imports
import { PaletteMode } from '@mui/material'

// ** ThemeConfig Import
import themeConfig from 'src/configs/themeConfig'

// ** Types Import
import { ThemeColor, ContentWidth } from 'src/@core/layouts/types'

import { getInfoIgateway, setPlaceIgateway, playPauseIgateway } from 'src/back/iGateway'

import { Router } from 'next/router'

export type Settings = {
  mode: PaletteMode
  themeColor: ThemeColor
  contentWidth: ContentWidth
}

export type InfoIgateway = {
  cnpjCpf: string
  placeId: string,
  statusServidorIPT : string,
  versionIgateway: string,
  statusIgateway: string | undefined,
  failsOnDay: Number,
  places: Array<Object>,
  terminals: Array<Object>
  marksLastDays: Object,
  totalPedestrians: Number
}

export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
  igatewayPort: string | undefined
  infoIgateway: InfoIgateway
  reloadDashboard: () => void
  reloadInfoIgateway: () => Promise<void>
  setPlace: (id: string) => Promise<void>
  playPause: () => Promise<void>
  changeView: () => void
  logsOn : boolean
}

export const defaultStatusIGateway = {
  cnpjCpf: '---',
  placeId: 'ALL',
  statusServidorIPT : '---',
  versionIgateway: '---',
  statusIgateway: undefined,
  failsOnDay: 0,
  places: [],
  terminals: [],
  marksLastDays: [],
  totalPedestrians: 0
}

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth,
}

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
  igatewayPort: undefined,
  infoIgateway: defaultStatusIGateway,
  reloadInfoIgateway: () => Promise.resolve(),
  setPlace: () => Promise.resolve(),
  playPause: () => Promise.resolve(),
  changeView: () => null,
  reloadDashboard: () => null,
  logsOn: false
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [igatewayPort, setIgatewayPort] = useState<string>()
  const [attemptsGetPort, setAttemptsGetPort] = useState<number>(0)

  const [infoIgateway, setInfoIgateway] = useState<InfoIgateway>({ ...defaultStatusIGateway})
  const [attemptsGetInfo, setAttemptsGetInfo] = useState<number>(0)

  const [settings, setSettings] = useState<Settings>({ ...initialSettings })
  const [logsOn, setLogsOn] = useState<boolean>(false)

  useEffect(() => {
    if (attemptsGetPort<3 && !igatewayPort) {
      console.log('attemptsGetPort:', attemptsGetPort)
      getIgatewayPort()
    } else {
      if (attemptsGetPort>=3) setInfoIgateway({ ...defaultStatusIGateway, statusIgateway:'ERRO'})
    }
  },[attemptsGetPort,igatewayPort])

  async function getIgatewayPort() {
    const hostname = window.location.hostname
    const portNumber = window.location.port == '3000' ? 8123 : window.location.port

    try {
      Router.events.emit('routeChangeStart')
      // Fixado para teste Dev Frontend
      //const ret = await fetch(`http://${hostname}:${portNumber}/port`)
      Router.events.emit('routeChangeComplete')
      const port = '8321' //await ret.text()
      if (port /*&& port != ''*/) {
        setIgatewayPort(port)
        console.log('port:', port)
      } else {
        Router.events.emit('routeChangeError')
        setAttemptsGetPort(attemptsGetPort+1)
      }
    } catch(err) {
      Router.events.emit('routeChangeError')
      setAttemptsGetPort(attemptsGetPort+1)
    }
  }

  useEffect(() => {
    if (attemptsGetInfo<3 && igatewayPort && !infoIgateway.statusIgateway) {
      console.log('attemptsGetInfo:', attemptsGetInfo)
      _reloadInfoIgateway(igatewayPort)
    } else {
      if (attemptsGetInfo>=3 && !infoIgateway.statusIgateway) setInfoIgateway({ ...defaultStatusIGateway, statusIgateway:'ERRO'})
    }
  },[attemptsGetInfo, infoIgateway , igatewayPort])

  async function _reloadInfoIgateway(igatewayPort:string | undefined) {
    Router.events.emit('routeChangeStart')
    const retIgateway = (await getInfoIgateway(igatewayPort as string))
    if (retIgateway) {
      Router.events.emit('routeChangeComplete')
      setInfoIgateway(retIgateway)
    } else {
      Router.events.emit('routeChangeError')
      setAttemptsGetInfo(attemptsGetInfo+1)
    }
  }

  function reloadDashboard() {
    setIgatewayPort(undefined)
    setAttemptsGetPort(0)
    setInfoIgateway(defaultStatusIGateway)
    setAttemptsGetInfo(0)
  }

  function changeView() {
    if (logsOn) {
      setLogsOn(false)
    } else {
      setLogsOn(true)
    }
  }

  async function setPlace(id:string) {
    Router.events.emit('routeChangeStart')
    const retIgateway = (await setPlaceIgateway(id,igatewayPort as string))
    if (retIgateway) {
      Router.events.emit('routeChangeComplete')
    } else {
      Router.events.emit('routeChangeError')
    }
    await _reloadInfoIgateway(igatewayPort)
  }

  async function playPause() {
    Router.events.emit('routeChangeStart')
    const retIgateway = (await playPauseIgateway(igatewayPort as string))
    if (retIgateway) {
      Router.events.emit('routeChangeComplete')
    } else {
      Router.events.emit('routeChangeError')
    }
    await _reloadInfoIgateway(igatewayPort)
  }


  async function reloadInfoIgateway() {
    if (!igatewayPort || infoIgateway.statusIgateway=='ERRO') {
      getIgatewayPort()
      setInfoIgateway(defaultStatusIGateway)
    } else {
      _reloadInfoIgateway(igatewayPort)
    }
  }

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings)
  }

  return <SettingsContext.Provider value={{
    settings,
    saveSettings,
    igatewayPort,
    infoIgateway,
    reloadInfoIgateway,
    setPlace,
    playPause,
    changeView,
    reloadDashboard,
    logsOn
  }}>{children}</SettingsContext.Provider>
}

export const SettingsConsumer = SettingsContext.Consumer
