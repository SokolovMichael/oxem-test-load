import noUiSlider from './nouislider/nouislider.min';

const sum = document.querySelector('.sum');
const sliderAnInitialFee = sum.querySelector('.sum__item-slider--an-initial-fee');
const inputAnInitialFee = sum.querySelector('.sum__input--an-initial-fee-percent');
const inputs = [inputAnInitialFee];

const initSliderAnInitialFee = () => {
  noUiSlider.create(sliderAnInitialFee, {
    start: 10,
    connect: 'lower',
    step: 1,
    range: {
      'min': 10,
      'max': 60,
    },
  });
};

const initRangeSliderAnInitialFee = (i, value) => {
  const array = [null, null];
  array[i] = value;
  sliderAnInitialFee.noUiSlider.set(array);
};

const drawSliderAnInitialFee = () => {
  if (sliderAnInitialFee) {
    initSliderAnInitialFee();
    initRangeSliderAnInitialFee();

    inputs.forEach((element, index) => {
      element.addEventListener('change', (evt) => {
        initRangeSliderAnInitialFee(index, evt.currentTarget.value);
      });
    });
  }
};

export {drawSliderAnInitialFee};
