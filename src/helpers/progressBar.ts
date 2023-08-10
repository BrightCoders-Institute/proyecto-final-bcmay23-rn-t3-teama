type consumedValue = string;
type totalValue = string;

export const calculateProgress = (consumed: consumedValue, total: totalValue) => {
    const consumedValueNumber = parseFloat(consumed.replace(/[^0-9]/g, ''));
    const totalValueNumber = parseFloat(total.replace(/[^0-9]/g, ''));

    return consumedValueNumber / totalValueNumber;
};
