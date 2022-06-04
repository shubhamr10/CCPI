'use strict';

class Sockets{
    constructor(io) {
        this.io = io;

        io.on('connection', (socket)=>{
            console.log('socket connected')
        })
    }


}

module.exports = Sockets;