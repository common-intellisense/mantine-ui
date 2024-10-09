import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function mantineCore7() {
  return {
    uiName: '@mantine/core',
    lib: '@mantine/core',
    map: getPropsMap(),
  }
}

export function mantineCore7Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: '@mantine/core',
    // directives: directives.mantineCore7,
  }
}
