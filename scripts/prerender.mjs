import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const distDirectory = resolve(root, 'dist')
const templatePath = resolve(distDirectory, 'index.html')
const serverEntryPath = resolve(root, 'dist-ssr', 'entry-server.js')

const template = await readFile(templatePath, 'utf8')
const { render } = await import(pathToFileURL(serverEntryPath).href)
const appHtml = render('/')
const rootPlaceholder = '<div id="root"></div>'

if (!template.includes(rootPlaceholder)) {
  throw new Error(`Could not find ${rootPlaceholder} in ${templatePath}`)
}

const document = template.replace(
  rootPlaceholder,
  `<div id="root">${appHtml}</div>`,
)

await writeFile(templatePath, document)
console.log(`Prerendered / to ${templatePath}`)
