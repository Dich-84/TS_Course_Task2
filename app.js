"use strict";
;
const totalPrice = ({ price, discount, isInstallment, months }) => {
    let result = price * (1 - discount / 100);
    if (isInstallment) {
        return result / months;
    }
    return result;
};
