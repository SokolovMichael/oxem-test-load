import {inputNumber} from './input-number.js';
import {drawSliderPrice} from './draw-slider-price.js';
import {drawSliderAnInitialFee} from './draw-slider-an-initial-fee.js';
import {drawSliderLeasingTerm} from './draw-slider-leasing-term.js';
import {calculateAll} from './calculate-all.js';
import {sendData} from './send-data.js';

inputNumber();
drawSliderPrice();
drawSliderAnInitialFee();
drawSliderLeasingTerm();
calculateAll();
sendData();
