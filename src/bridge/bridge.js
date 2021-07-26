const __events = new Map();

const listenEvent = (eventName, eventFunction) => {
    if (__events.has(eventName)) {
        const event = __events.get(eventName);

        if (!event.has(eventFunction)) {
            event.add(eventFunction);
        }
    } else {
        __events.set(eventName, new Set([eventFunction]));
    }
};

const callEvent = (eventName, ...args) => {
    if (__events.has(eventName)) {
        const event = __events.get(eventName);
        event.forEach(eventFunction => {
            eventFunction(...args);
        });
    }
};

const removeEvent = (eventName, eventFunction) => {
    if (__events.has(eventName)) {
        const event = __events.get(eventName);
        if (!event.has(eventFunction)) {
            event.delete(eventFunction);
        }
    }
};

const callServer = (eventName, ...args) => {
    // eslint-disable-next-line no-undef
    mp.trigger(eventName, ...args);
};

const EventManager = {
    on: listenEvent,
    call: callEvent,
    remove: removeEvent,
    callServer
}

export default EventManager;