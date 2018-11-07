const Command = require('command');
const CAPTURE_OPCODE = 26026;

module.exports = function Cap(dispatch) {
    const command = Command(dispatch);

    command.add('cap', (arg) => {
        const buffer = Buffer.alloc(8);
        buffer.writeUInt16LE(8);
        buffer.writeUInt16LE(CAPTURE_OPCODE, 2);
        buffer.writeUInt32LE(parseInt(arg), 4);
        dispatch.toServer(buffer);
    });
}