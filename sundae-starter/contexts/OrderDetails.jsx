import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants/index';

const OrderDetails = createContext();

export function useOrderDetails() {
    const contextValue = useContext(OrderDetails);

    if (!contextValue) {
        throw new Error('useOrderDetails must be called from within an OrderDetailsProvider');
    }

    return contextValue;
}

export function OrderDetailsProvider(props) {
    const [optionsCount, setOptionsCounts] = useState({
        scoops: {},
        toppings: {},
    });

    function updateItemCount(itemName, newItemCount, optionType) {
        const newOtionCounts = { ...optionsCount };
        newOtionCounts[optionType][itemName] = newItemCount;
        setOptionsCounts(newOtionCounts);
    }
    function resetOrder() {
        setOptionsCounts({
            scoops: {},
            toppings: {},
        });
    }

    function calculateTotal(optionType) {
        const countsArray = Object.values(optionsCount[optionType]);
        const totalCount = countsArray.reduce((total, value) => total + value, 0);
        return totalCount * pricePerItem[optionType];
    }

    const totals = {
        scoops: calculateTotal('totals'),
        toppings: calculateTotal('toppings'),
    };

    const value = { optionsCount, totals, updateItemCount, resetOrder };
    return <OrderDetails.Provider value={value} {...props} />;
}
