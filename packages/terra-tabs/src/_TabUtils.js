import { KEY_LEFT, KEY_RIGHT } from 'keycode-js';

const nextFocus = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const sibling = event.currentTarget.nextSibling;
  if (sibling) {
    sibling.focus();
  } else {
    event.currentTarget.parentNode.firstChild.focus();
  }
};

const previousFocus = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const sibling = event.currentTarget.previousSibling;
  if (sibling) {
    sibling.focus();
  } else {
    event.currentTarget.parentNode.lastChild.focus();
  }
};

const handleArrows = (event) => {
  const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
  const nextKey = !isRTL ? KEY_RIGHT : KEY_LEFT;
  const previousKey = !isRTL ? KEY_LEFT : KEY_RIGHT;
  if (event.nativeEvent.keyCode === nextKey) {
    nextFocus(event);
  } else if (event.nativeEvent.keyCode === previousKey) {
    previousFocus(event);
  }
};

export default {
  handleArrows,
};

export {
  handleArrows,
};
