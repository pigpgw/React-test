import { render, screen } from '@testing-library/react';

import { Options } from '../Options';
import { expect, test } from 'vitest';

test('displays image for each scoop option from server', async () => {
    render(<Options optionType='scoops' />);

    const scoopIages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopIages).toHaveLength(2);

    const altText = scoopIages.map((element) => element.alt);
    expect(altText).toEqual(['chocolate scoop', 'vanilla scoop']);
});

test('dd image for each scoop option from server', async () => {
    render(<Options optionType='toppings' />);

    const scoopIages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(scoopIages).toHaveLength(3);

    const altText = scoopIages.map((element) => element.alt);
    expect(altText).toEqual(['cherris topping', 'm&ms topping', 'm&hot fudge topping']);
});
