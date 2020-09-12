import {Command, flags} from '@oclif/command'
import {TransformRepository} from '../transforms'

export default class ListTransform extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    TransformRepository.loadTransforms()
    const toListText = ({name, description}: {name: string; description: string}) => `${name}\n${description}\n`
    const listText = TransformRepository.listTransformers()
    .map(toListText)
    .join('\n')
    this.log(listText)
  }
}
