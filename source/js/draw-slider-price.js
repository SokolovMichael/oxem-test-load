import noUiSlider from './nouislider/nouislider.min';

const sum = document.querySelector('.sum');
const sliderPrice = sum.querySelector('.sum__item-slider--price');
const inputPrice = sum.querySelector('.sum__input--price');
const inputs = [inputPrice];

const initSliderPrice = () => {
  noUiSlider.create(sliderPrice, {
    start: 3300000,
    connect: 'lower',
    step: 10000,
    range: {
      'min': 1000000,
      'max': 6000000,
    },
  });
};

const initRangeSliderPrice = (i, value) => {
  const array = [null, null];
  array[i] = value;
  sliderPrice.noUiSlider.set(array);
};

const drawSliderPrice = () => {
  if (sliderPrice) {
    initSliderPrice();
    initRangeSliderPrice();
    inputs.forEach((element, index) => {
      element.addEventListener('change', (evt) => {
        initRangeSliderPrice(index, evt.currentTarget.value);
      });
    });
  }
};

export {drawSliderPrice};
