import fsp from 'node:fs/promises'
import { glob } from 'tinyglobby'

async function run() {
  const entry = await glob('./src/mantineCore7/*.json', {
    absolute: true,
  })
  entry.map(async (url) => {
    const json = (await import(url)).default
    const props = json.props
    for (const key in props) {
      if (key.endsWith(' *')) {
        const newKey = key.split(' ')[0]
        const value = props[key]
        delete props[key]
        value.required = true
        props[newKey] = value
      }
    }
    await fsp.writeFile(url, JSON.stringify(json, null, 2))
  })
}

run()
