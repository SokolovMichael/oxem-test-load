const sum = document.querySelector('.sum');
const inputPrice = sum.querySelector('.sum__input--price');
const regex = /[^0-9]/g;

const inputNumber = () => {
  inputPrice.oninput = function () {
    this.value = this.value.replace(regex, '');
  };
  inputPrice.type = 'text';
};

export {inputNumber};
