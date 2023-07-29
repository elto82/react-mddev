import { EVENTS } from './consts';

export function navigate(href) {
  window.history.pushState({}, '', href);
  //crear evento personalizado para cambiar la url
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  //enviar el evento
  window.dispatchEvent(navigationEvent);
}