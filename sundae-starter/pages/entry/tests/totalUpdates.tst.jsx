import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Options } from '../Options';

test('update scoop subtotal when scoops change', async () => {
    const user = userEvent.setup();
    render(<Options optionType='scoops' />);

    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopsSubtotal).toHaveTextContent('0,00');

    const vanillaInput = await screen.findByRole('spinbutton', {
        name: 'vanila',
    });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('1.00');

    const chocolateInput = await screen.findByRole('spinbutton', {
        name: 'chocolate',
    });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, '2');
    expect(scoopsSubtotal).toHaveTextContent('6.00');
});
