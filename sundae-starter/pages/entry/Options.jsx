import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScoopOptions } from './ScoopOptions';
import { ToppingOptions } from './ToppingOptions';
import { AlertBanner } from '../common/AlertBanner';
import { pricePerItem } from '../../constants';
import { formatCurrency } from '../../utilities/index';
import { useOrderDetails } from '../../contexts/OrderDetails';

export const Options = ({ optionType }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const { totals } = useOrderDetails();
    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((response) => setItems(response.data))
            .catch((error) => {
                // TODO: handle error response
                setError(true);
            });
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;
    const optionItems = items.map((item) => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
    if (error) {
        return <AlertBanner />;
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{formatCurrency(pricePerItem[optionType])}</p>
            <p>
                {title} total: {formatCurrency(totals[optionType])}
            </p>
            <div>{optionItems}</div>
        </div>
    );
};
