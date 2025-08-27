import fs from 'fs'
import { css } from './src/index.js'

fs.writeFileSync('dist/output.css',css)
console.log("Css Generated");
