import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScoopOptions } from './ScoopOptions';
import { ToppingOptions } from './ToppingOptions';
import { AlertBanner } from '../common/AlertBanner';

export const Options = ({ optionType }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
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
    if (error) {
        return <AlertBanner />;
    }
    return (
        <div>
            Options
            <div>{optionItems}</div>
        </div>
    );
};
