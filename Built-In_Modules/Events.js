const eventemitter = require('events');
const emitter = new eventemitter.EventEmitter();

// register a listener, Create an event handler, Assign the event handler to an event.
emitter.on('messageLogged', function(){
    console.log('Listener Called');
});

// Raise an Event
emitter.emit('messageLogged');


// emit usually means making a noise, produce- signalling.
