import noUiSlider from './nouislider/nouislider.min';

const sum = document.querySelector('.sum');
const sliderLeasingTerm = sum.querySelector('.sum__item-slider--leasing-term');
const inputLeasingTerm = sum.querySelector('.sum__input--leasing-term');
const inputs = [inputLeasingTerm];

const initSliderLeasingTerm = () => {
  noUiSlider.create(sliderLeasingTerm, {
    start: 60,
    connect: 'lower',
    step: 1,
    range: {
      'min': 1,
      'max': 60,
    },
  });
};

const initRangeSliderLeasingTerm = (i, value) => {
  const array = [null, null];
  array[i] = value;
  sliderLeasingTerm.noUiSlider.set(array);
};

const drawSliderLeasingTerm = () => {
  if (sliderLeasingTerm) {
    initSliderLeasingTerm();
    initRangeSliderLeasingTerm();
    inputs.forEach((element, index) => {
      element.addEventListener('change', (evt) => {
        initRangeSliderLeasingTerm(index, evt.currentTarget.value);
      });
    });
  }
};

export {drawSliderLeasingTerm};
