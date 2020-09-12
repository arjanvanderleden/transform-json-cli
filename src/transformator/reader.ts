import * as fse from 'fs-extra'

export interface Reader {
  read(): Promise<any>;
}

export class FileDataReader implements Reader {
  constructor(private fileName: string) {}

  async read() {
    if (!fse.existsSync(this.fileName)) {
      throw new Error(`No such file ${this.fileName}`)
    }
    return fse.readJSON(this.fileName)
  }
}
