import {Command, flags} from '@oclif/command'
import {FileDataReader} from '../transformator/reader'
import {Transformator} from '../transformator/transformator'
import {ConsoleDataWriter, FileDataWriter} from '../transformator/writer'
import {TransformRepository} from '../transforms'

export default class SingleTransform extends Command {
  static description = 'runs a single transform on input data';

  static flags = {
    help: flags.help({char: 'h'}),

    in: flags.string({
      char: 'i',
      required: true,
      description: 'json file: input data to be used for transform',
    }),

    out: flags.string({
      char: 'o',
      required: false,
      description: 'output file name: defaults to writing to console',
    }),
  }

  static args = [{
    name: 'transform',
    required: true,
  }]

  async run() {
    try {
      TransformRepository.loadTransforms()
      const {flags, args} = this.parse(SingleTransform)

      const transforms = [TransformRepository.get(args.transform)]
      const reader = new FileDataReader(flags.in)
      const writer = flags.out === undefined ? new ConsoleDataWriter() : new FileDataWriter(flags.out)

      await (Transformator.create({reader, writer, transforms})).transform()
    } catch (error) {
      this.error(error)
    }
  }
}
