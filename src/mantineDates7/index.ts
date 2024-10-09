import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function mantineDates7() {
  return {
    uiName: '@mantine/dates',
    lib: '@mantine/dates',
    map: getPropsMap(),
  }
}

export function mantineDates7Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: '@mantine/dates',
    // directives: directives.mantineDates7,
  }
}
