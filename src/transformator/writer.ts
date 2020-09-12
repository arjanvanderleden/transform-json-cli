import * as fse from 'fs-extra'
import * as path from 'path'

export interface Writer {
  write(data: any, transform: string): Promise<void>;
}

export class ConsoleDataWriter implements Writer {
  async write(data: any, transform: string) {
    console.log(`transform: ${transform}`)
    console.log(JSON.stringify(data, null, 2))
  }
}

export class FileDataWriter implements Writer {
  constructor(private fileName: string) {

  }

  async write(data: any, _transform: string) {
    await fse.ensureDir(path.dirname(this.fileName))
    await fse.writeJSON(this.fileName, data, {spaces: 2})
  }
}

export class FolderDataWriter implements Writer {
  constructor(private folderName: string) {

  }

  async write(data: any, transform: string) {
    await fse.ensureDir(this.folderName)
    await fse.writeJSON(path.join(this.folderName, `${transform}.json`), data, {spaces: 2})
  }
}
