import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScoopOptions } from './ScoopOptions';
import { ToppingOptions } from './ToppingOptions';

export const Options = ({ optionType }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((response) => setItems(response.data))
            .catch((error) => {
                // TODO: handle error response
            });
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;
    const optionItems = items.map((item) => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));
    return (
        <div>
            Options
            <div>{optionItems}</div>
        </div>
    );
};
