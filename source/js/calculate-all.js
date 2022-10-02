const sum = document.querySelector('.sum');
const inputAnInitialFeeRublesResult = sum.querySelector('.sum__input--an-initial-fee-rubles');
const inputPrice = sum.querySelector('.sum__input--price');
const sliderAnInitialFee = sum.querySelector('.sum__item-slider--an-initial-fee');
const inputAnInitialFee = sum.querySelector('.sum__input--an-initial-fee-percent');
const sliderPrice = sum.querySelector('.sum__item-slider--price');
const sliderLeasingTerm = sum.querySelector('.sum__item-slider--leasing-term');
const inputLeasingTerm = sum.querySelector('.sum__input--leasing-term');
const total = document.querySelector('.total');
const totalMonthlyPayment = total.querySelector('.total__input--monthly-payment');
const totalLeaseAgreement = total.querySelector('.total__input--lease-agreement');

const calculateAll = () => {
  sliderPrice.noUiSlider.on('update', (values, handle) => {
    const inputPriceNumber = Math.round(values[handle]) * 1;
    const inputPriceText = inputPriceNumber.toLocaleString();
    inputPrice.value = inputPriceText;
    const inputPriceCalculation = Number(inputPrice.value.replace(/\s/g, ''));

    sliderAnInitialFee.noUiSlider.on('update', (valuesAnInitialFee, handleAnInitialFee) => {
      inputAnInitialFee.value = Math.round(valuesAnInitialFee[handleAnInitialFee]);
      const inputAnInitialFeeRublesResultNumber = inputPriceCalculation * inputAnInitialFee.value / 100;
      const inputAnInitialFeeRublesResultText = inputAnInitialFeeRublesResultNumber.toLocaleString();
      inputAnInitialFeeRublesResult.value = inputAnInitialFeeRublesResultText;

      sliderLeasingTerm.noUiSlider.on('update', (valuesLeasingTerm, handleLeasingTerm) => {
        inputLeasingTerm.value = Math.round(valuesLeasingTerm[handleLeasingTerm]);
        const months = inputLeasingTerm.value;
        const monthPay = Math.round((inputPriceCalculation - inputAnInitialFeeRublesResultNumber) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1)));
        const monthPayText = monthPay.toLocaleString();
        totalMonthlyPayment.value = monthPayText;
        const totalSum = inputAnInitialFeeRublesResultNumber + months * monthPay;
        const totalSumText = totalSum.toLocaleString();
        totalLeaseAgreement.value = totalSumText;
      });
    });
  });
};

export {calculateAll};
