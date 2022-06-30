'use strict';

class Sockets{
    constructor(io) {
        this.io = io;
        this.namespaces = []
        io.on('connection', (socket)=>{
            console.log('socket connected')
        })
    }

    connection(){
    // loop through each namespace and listen for connection
    this.namespaces.forEach((namespace)=> {
        // const thisNs = io.of(namespace.endpoint);
        io.of(namespace.endpoint).on('connection', (nssocket) => {
            const username = nssocket.handshake.query.username;
            // console.log(`${nssocket.id} has joined ${namespace.endpoint}`);
            // a socket has connected to one of our chat group namespaces.
            // send them back to chat
            nssocket.emit('nsRoomLoad', namespace.rooms);
            nssocket.on('joinRoom', (roomToJoin, numberofUserCallback)=>{
                // Deal with the history... once we have it
                const roomToLeave = Object.keys(nssocket.rooms)[1];
                nssocket.leave(roomToLeave);
                updateUserInRooms(namespace, roomToLeave);
                nssocket.join(roomToJoin);
                // io.of('/wiki').in(roomToJoin).clients((error, clients) => {
                //     numberofUserCallback(clients.length);
                // });
                const nsRoom = namespace.rooms.find((room) => room.roomTitle ===roomToJoin );
                // console.log(nsRoom);
                nssocket.emit('history_catch_up', nsRoom.history);
                // Send back the number of user to all sosckets
                updateUserInRooms(namespace, roomToJoin);
            });
            // Recieve new messages
            nssocket.on('new_message_to_server', (msg) => {
                // Send this message to all the sockets that are in the room
                // how can we find 
                // console.log('Room data =>', nssocket.rooms)
                // The user will be in the 2nd rooms in the object list
                // this is beaue the socket alaways joins its own rooms on connection
                // get the keys
                const roomsTitle = Object.keys(nssocket.rooms)[1];
                const fullMsg = {
                    text:msg.text,
                    time: Date.now(),
                    username:username,
                    avatar:'https://via.placeholder.com/30'
                };
                // We need to fint the Roomo object for this rooms
                const nsRoom = namespace.rooms.find((room) => room.roomTitle ===roomsTitle );
                nsRoom.addMessage(fullMsg);
    
    
                io.of(namespace.endpoint).to(roomsTitle).emit('messageToClients', fullMsg);
            })
        })
    })
    }
     updateUserInRooms(namespace, roomToJoin){
    io.of(namespace.endpoint).in(roomToJoin).clients((error, clients) => {
        // console.log('asdasd',clients.length);
        io.of(namespace.endpoint).in(roomToJoin).emit('update_members', clients.length);
    });
}


}

module.exports = Sockets;