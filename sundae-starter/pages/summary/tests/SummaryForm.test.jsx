import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SummaryForm } from '../SummaryForm';
import App from '../../../src/App';

test('checkbox enables button', async () => {
    const user = userEvent.setup();
    render(<App />);
    const checkboxElement = screen.getByRole('checkbox', { name: /checkbox-input/i });
    expect(checkboxElement).not.toBeChecked();

    const confirmButtonElement = screen.getByRole('button', { name: /confirm button/i });
    expect(confirmButtonElement).toBeDisabled();
    await user.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
    expect(confirmButtonElement).toBeEnabled();
    await user.click(checkboxElement);
    expect(confirmButtonElement).toBeDisabled();
});

test('popover responds to hover', async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();
    // popover appears on mouse over of checkbox <label>
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();
    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
});
