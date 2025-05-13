import { render, screen } from '@testing-library/react';

import { Options } from '../Options';
import { expect } from 'vitest';

test('displays image for each scoop option from server', async () => {
    render(<Options optionType='scoops' />);

    const scoopIages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopIages).toHaveLength(2);

    const altText = scoopIages.map((element) => element.alt);
    expect(altText).toEqual(['chocolate scoop', 'vanilla scoop']);
});
