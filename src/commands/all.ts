import {Command, flags} from '@oclif/command'
import {FileDataReader} from '../transformator/reader'
import {Transformator} from '../transformator/transformator'
import {ConsoleDataWriter, FileDataWriter, FolderDataWriter} from '../transformator/writer'
import {TransformRepository} from '../transforms'

export default class All extends Command {
    static description = 'runs all transforms on input data';

    static flags = {
      help: flags.help({char: 'h'}),

      in: flags.string({
        char: 'i',
        required: true,
        description: 'json file: input data to be used for transform',
      }),

      out: flags.string({
        char: 'o',
        required: true,
        description: 'output folder',
      }),
    }

    static args = []

    async run() {
      try {
        TransformRepository.loadTransforms()
        const {flags} = this.parse(All)

        const transforms = TransformRepository.getAll()
        const reader = new FileDataReader(flags.in)
        const writer = flags.out === undefined ? new ConsoleDataWriter() : new FolderDataWriter(flags.out)

        await (new Transformator({reader, writer, transforms})).transform()
      } catch (error) {
        this.error(error)
      }
    }
}
