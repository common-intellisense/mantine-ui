import AreaChart from './AreaChart.json'
import BarChart from './BarChart.json'
import BubbleChart from './BubbleChart.json'
import CompositeChart from './CompositeChart.json'
import DonutChart from './DonutChart.json'
import LineChart from './LineChart.json'
import PieChart from './PieChart.json'
import RadarChart from './RadarChart.json'
import ScatterChart from './ScatterChart.json'
import Sparkline from './Sparkline.json'

export function getPropsMap() {
  return [
    AreaChart,
    BarChart,
    BubbleChart,
    CompositeChart,
    DonutChart,
    LineChart,
    PieChart,
    RadarChart,
    ScatterChart,
    Sparkline,
  ]
}

export function getComponentsMap() {
  return [
    [AreaChart, AreaChart.name, `<${AreaChart.name}></${AreaChart.name}`],
    [BarChart, BarChart.name, `<${BarChart.name}></${BarChart.name}`],
    [BubbleChart, BubbleChart.name, `<${BubbleChart.name}></${BubbleChart.name}`],
    [CompositeChart, CompositeChart.name, `<${CompositeChart.name}></${CompositeChart.name}`],
    [DonutChart, DonutChart.name, `<${DonutChart.name}></${DonutChart.name}`],
    [LineChart, LineChart.name, `<${LineChart.name}></${LineChart.name}`],
    [PieChart, PieChart.name, `<${PieChart.name}></${PieChart.name}`],
    [RadarChart, RadarChart.name, `<${RadarChart.name}></${RadarChart.name}`],
    [ScatterChart, ScatterChart.name, `<${ScatterChart.name}></${ScatterChart.name}`],
    [Sparkline, Sparkline.name, `<${Sparkline.name}></${Sparkline.name}`],
  ]
}
