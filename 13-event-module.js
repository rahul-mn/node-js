const EventEmitter = require("events");
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=> {
    console.log(`Data Received from ${name} with ID: ${id}`);
})

customEmitter.on('response', ()=> {
    console.log(`Data Received`);
})

customEmitter.emit('response', 'dablu', 23)