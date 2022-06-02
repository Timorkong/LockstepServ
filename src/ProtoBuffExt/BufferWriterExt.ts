import { BufferWriter, util, Writer } from "protobufjs";


export class BufferWriterExt {

  public buffer: BufferWriter;

  constructor() {
    this.buffer = Writer.create();
  }

  public custombytes(value: (Uint8Array | string)): Writer {

    // this.buffer.custombytes(value);

    // return this.buffer;

    if (util.isString(value)) {
      var utilAny = util as any;
      value = utilAny._Buffer_from(value, "base64");
    }
    var len = value.length >>> 0;
    if (len) {
      var thisAny = this.buffer as any;
      var BufferWriterAny = BufferWriter as any;
      thisAny._push(BufferWriterAny.writeBytesBuffer, len, value);
    }
    return this.buffer;
  }
}