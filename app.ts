interface priceStructure {
    price: number
    discount: number
    isInstallment: boolean
    months: number
};

const totalPrice = ({ price, discount, isInstallment, months }: priceStructure): number => {
    let result: number = price * (1 - discount / 100);
    if (isInstallment) {
        return result / months;
    }
    return result;
};
