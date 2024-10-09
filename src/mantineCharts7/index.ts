import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function mantineCharts7() {
  return {
    uiName: '@mantine/charts',
    lib: '@mantine/charts',
    map: getPropsMap(),
  }
}

export function mantineCharts7Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: '@mantine/charts',
    // directives: directives.mantineCharts7,
  }
}
