// ** React Imports
import { useState, ChangeEvent, useEffect } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

import { getLogs } from 'src/back/iGateway'
import { useSettings } from 'src/@core/hooks/useSettings'
import { Router } from 'next/router'

interface Column {
  id: 'timeStamp' | 'level' | 'message'
  label: string
  minWidth?: number
  align?: 'right' | 'center' | 'left'
  format?: (value: string) => string
}

const columns: readonly Column[] = [
  {
    id: 'timeStamp',
    label: 'Data/Hora',
    minWidth: 200,
    align: 'center',
    format: (value: string) => {
      const year = value[0]+value[1]
      const month = value[2]+value[3]
      const day = value[4]+value[5]
      return `${day}/${month}/${year} ${value.substring(7)}`
    }
  },
  { id: 'level', label: 'Tipo', minWidth: 20, align: 'center', },
  {
    id: 'message',
    label: 'Mensagem',
    minWidth: 600,
    align: 'left',
  },
]

interface Data {
  id : number,
  timeStamp : string
  level: string
  message: string
}

const LogsView = () => {

  const { igatewayPort } = useSettings()

  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [rows, setRows] = useState<Data[]>([])

  async function callGetLogs(igatewayPort:string) {
    Router.events.emit('routeChangeStart')
    const ret = await getLogs(igatewayPort)
    Router.events.emit('routeChangeComplete')
    if (ret) {
      setRows(ret.map((ret:any)=>({
        id : ret.ID,
        timeStamp : ret.TIMESTAMP,
        level : ret.LEVEL,
        message : ret.MESSAGE
      })))
    }
  }

  useEffect(()=>{
    if (igatewayPort) callGetLogs(igatewayPort)
  },[igatewayPort])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    const interval = setInterval(async() => {
      if (igatewayPort) callGetLogs(igatewayPort)
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label='sticky table' size="small">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default LogsView
