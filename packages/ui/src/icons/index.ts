// SVG exportados de Figma (página 1), limpiados a currentColor. `size` es el tamaño original en Figma.
import arrowDown from './arrow-down.svg?raw'
import arrowLeft from './arrow-left.svg?raw'
import arrowUp from './arrow-up.svg?raw'
import arrowUpRight from './arrow-up-right.svg?raw'
import database from './database.svg?raw'
import download from './download.svg?raw'
import github from './github.svg?raw'
import linkedin from './linkedin.svg?raw'
import panelsTopLeft from './panels-top-left.svg?raw'

export const icons = {
  'arrow-down': { svg: arrowDown, size: 17 },
  'arrow-left': { svg: arrowLeft, size: 17 },
  'arrow-up': { svg: arrowUp, size: 15 },
  'arrow-up-right': { svg: arrowUpRight, size: 17 },
  database: { svg: database, size: 24 },
  download: { svg: download, size: 17 },
  github: { svg: github, size: 17 },
  linkedin: { svg: linkedin, size: 17 },
  'panels-top-left': { svg: panelsTopLeft, size: 24 },
} as const

export type IconName = keyof typeof icons

export const iconNames = Object.keys(icons) as IconName[]
