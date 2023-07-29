import { EVENTS } from './consts';

export function navigate(href) {
  window.history.pushState({}, '', href);
  //crear evento personalizado para cambiar la url
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  //enviar el evento
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (e) => {

    const isMainEvent = e.button === 0;//primary click
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
    const isManageableEvent = target === undefined || target === '_self';

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault();
      navigate(to);
    }
  };

  return <a href={to} {...props} onClick={handleClick} />;
}