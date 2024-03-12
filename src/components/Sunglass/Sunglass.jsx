import React from 'react';

import './Sunglass.css'

import Watch from '../Watch/Watch';
import { add, multi, divideThePastNumberByTheSecondNumber as divide } from '../../Utils/calculate';
// import add from '../../Utils/calculate';

const Sunglass = () => {
    const Sunglass = () => {
        const first = 55;
        const second = 155;
        const sum = add(first, second);
        const mult = multi(first, second);
        const vaag = divide(first, second);
    }
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;