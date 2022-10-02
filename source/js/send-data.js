import {debounce} from './utils/debounce.js';
import {isEnterKey} from './utils/is-enter-key.js';

const form = document.querySelector('.form');
const formButton = form.querySelector('.form__wrapper').querySelector('button');
const formText = formButton.querySelector('.form__text');
const formLoad = formButton.querySelector('.form__load');

const onSendDataDebounce = debounce(() => {
  form.submit();
});

const initLoadingButton = () => {
  formText.classList.add('form__text--loading');
  formLoad.classList.add('form__load--loading');
};

const initSendData = () => {
  formButton.disabled = true;
  initLoadingButton();
  onSendDataDebounce();
};

const sendData = () => {
  formButton.type = 'button';
  formButton.addEventListener('click', initSendData);

  const onEnterKeydown = (evt) => {
    if (isEnterKey(evt)) {
      evt.preventDefault();
      initSendData();
    }
  };

  document.addEventListener('keydown', onEnterKeydown);
};

export {sendData};
