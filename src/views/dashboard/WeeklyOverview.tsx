// ** MUI Imports
//import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

//import Button from '@mui/material/Button'
import { Theme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'

//import IconButton from '@mui/material/IconButton'
//import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
//import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexChart from 'src/@core/components/react-apexcharts'
import useMediaQuery from '@mui/material/useMediaQuery'

const WeeklyOverview = (props:any) => {

  const { marksLastDays, terminals } = props
  // ** Hook
  const theme = useTheme()

  const chartLabels = marksLastDays.dates

  const optionsColors = [
    theme.palette.warning.main,
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.warning.dark,
    theme.palette.primary.dark,
    theme.palette.success.dark,
    theme.palette.success.dark
  ]

  const chartData: any = []
  const data = [0, 0, 0, 0, 0, 0, 0]
  for (let terminal of terminals) {
    chartData.push({
      name: terminal.DESCRICAO,
      type: 'column',
      fill: 'solid',
      color: optionsColors[terminal.CODTERMINAL % 8],
      data: marksLastDays[terminal.CODTERMINAL]
    })
  }

  if (terminals.length) {
    if (terminals.length > 1 && terminals.length <= 5) {
      chartData.push({
        name: 'TOTAL',
        type: 'area',
        fill: 'gradient',
        color: theme.palette.info.light,
        data: data.map((v, i) => {
          let tot = 0
          chartData.forEach((e: any) => (tot += e.data[i]))

          return tot
        })
      })
    } else {
      chartData[0].color = theme.palette.info.main
    }
  }

  const chartOptions: ApexOptions = {
    // Colors
    colors: [
      theme.palette.warning.main,
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.success.dark,
      theme.palette.warning.dark,
      theme.palette.primary.dark,
      theme.palette.success.dark
    ],

    plotOptions: { bar: { columnWidth: '55%' } },

    fill: { type: chartData.map((i: any) => i.fill) },
    labels: chartLabels,
    xaxis: {
      type: 'category'
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: y => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} marcações`
          }

          return y
        }
      }
    },

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },

      animations: { enabled: false },
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily
    },

    // States
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04
        }
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88
        }
      }
    },

    // Datalabels
    dataLabels: { enabled: false },

    // Stroke
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },

    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: theme.palette.divider,
      xaxis: {
        lines: {
          show: false
        }
      }
    },

    // Markers
    markers: {
      size: 0,
      strokeColors: theme.palette.background.paper
    },

    // Legend
    legend: {
      show: true,
      fontSize: String(13),
      position: useMediaQuery((theme: Theme) => theme.breakpoints.down('lg')) ? 'top' : 'right',
      horizontalAlign: 'right',
      markers: {
        radius: 12
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {
        colors: theme.palette.text.primary
      }
    },

    // Responsive
    responsive: [
      {
        // sm
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: { bar: { columnWidth: '40%' } }
        }
      },
      {
        // md
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: { bar: { columnWidth: '32%' } }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Marcações nos últimos 7 dias'
        sx = {{pb: '0px'}}
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexChart type='bar' series={chartData} options={chartOptions} height={300} />
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
