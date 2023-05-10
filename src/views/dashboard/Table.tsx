// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import CardHeader from '@mui/material/CardHeader'

interface RowType {
  CODTERMINAL: number,
  DESCRICAO: string,
  MARCATERMINAL: string,
  MODELOTERMINAL: string,
  ENDERECOIP: string,
  QTDPEDESTRES: number,
  STATUS: string,
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const statusObj: StatusObj = {
  ONLINE : { color: 'success' },
  ERRO : { color: 'error' },
  ERRO_NS : { color: 'error' },
  ERRO_SENHA : { color: 'warning' },
  DESCONHECIDO : { color: 'primary' },
  Livre: { color: 'info' },
}

const DashboardTable = (props:any) => {
  const { terminals } = props

  const rows = terminals

  return (
    <Card>
      <CardHeader
        title='Coletores'
        sx={{pb:'0px'}}
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Codigo</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell align='center'>Ip</TableCell>
              <TableCell align='center'>Colaboradores</TableCell>
              <TableCell align='center'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => {
              if (!['ONLINE','ERRO','ERRO_SENHA','ERRO_NS'].includes(row.STATUS)) row.STATUS='DESCONHECIDO';
              return (
                <TableRow hover key={row.CODTERMINAL} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell align='center'>{row.CODTERMINAL}</TableCell>
                  <TableCell>{row.DESCRICAO}</TableCell>
                  <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.MODELOTERMINAL}</Typography>
                      <Typography variant='caption'>{row.MARCATERMINAL}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align='center'>{row.ENDERECOIP}</TableCell>
                  <TableCell align='center'>{row.QTDPEDESTRES}</TableCell>
                  <TableCell align='center'>
                    <Chip
                      label={row.STATUS=='DESCONHECIDO' ? '?' : row.STATUS}
                      color={statusObj[row.STATUS].color}
                      sx={{
                        height: 24,
                        fontSize: '0.75rem',
                        textTransform: 'capitalize',
                        '& .MuiChip-label': { fontWeight: 500 }
                      }}
                    />
                  </TableCell>
                </TableRow>
            )})}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
