class EventBus {
  constructor() {
    if (!window.__eventBus) {
      window.__eventBus = document.createElement('div');
    }
    this.eventBus = window.__eventBus;
  }

  on(eventName, callback) {
    this.eventBus.addEventListener(eventName, callback);
  }

  emit(eventName, data) {
    this.eventBus.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  }

  off(eventName, callback) {
    this.eventBus.removeEventListener(eventName, callback);
  }
}

export const eventBus = new EventBus();
