// ** React Imports
import { ReactNode, useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

import { useSettings } from 'src/@core/hooks/useSettings'

const RootPage = () => {
  const router = useRouter()
  const { infoIgateway } = useSettings()

  const { statusIgateway } = infoIgateway

  useEffect(()=>{
    if (['RUN','STOP'].includes(statusIgateway as string)) router.push('/dashboard')
    if (statusIgateway=='UNLINKED') router.push('/login')
    if (statusIgateway=='ERRO') router.push('/errorIgateway')
  },[statusIgateway, router])

  return <></>
}

RootPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RootPage
