import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryForm } from '../../sundae-starter/pages/SummaryForm';

test('test checkbox clicked', () => {
    render(<SummaryForm />);
    const checkboxElement = screen.getByRole('button', { name: /button is/i });
    expect(checkboxElement).toBeEnabled();
    expect(checkboxElement).toHaveClass('gray');
    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeDisabled();
    expect(checkboxElement).toHaveClass('red');
});
