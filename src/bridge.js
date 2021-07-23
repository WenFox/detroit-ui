
const EventManager = {
    events: {},

    addHandler: function(eventName, handler) {
        if (eventName in this.events) {
            this.events[eventName].push(handler);
        }
        else {
            this.events[eventName] = [handler];
        }
    },

    removeHandler: function(eventName, handler) {
        if (eventName in this.events) {
            var index = this.events[eventName].indexOf(handler);
            this.events[eventName].splice(index, 1);
        }
    }
}

function trigger(eventName, args) {
    console.log(EventManager.events);
    const handlers = EventManager.events[eventName];

    handlers.forEach(handler => handler(JSON.parse(args)));
}

export {EventManager, trigger};
