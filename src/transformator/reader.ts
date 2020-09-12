import * as fse from 'fs-extra'
import * as path from 'path'

export interface Reader {
  read(): Promise<any>;
}

const toOptionFileName = (fileName: string) => {
  const folder = path.dirname(fileName)
  const extention = path.extname(fileName)
  const baseName = path.basename(fileName, extention)
  return path.join(folder, `${baseName}.options${extention}`)
}

export class FileDataReader implements Reader {
  constructor(private fileName: string) {}

  async read() {
    if (!fse.existsSync(this.fileName)) {
      throw new Error(`No such file ${this.fileName}`)
    }
    const data = await fse.readJSON(this.fileName)
    const optionsFileName = toOptionFileName(this.fileName)
    const options = fse.existsSync(optionsFileName) ? await fse.readJSON(optionsFileName) : {}
    return {data, options}
  }
}
