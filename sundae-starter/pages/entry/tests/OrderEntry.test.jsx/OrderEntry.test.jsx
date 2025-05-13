import { render, screen, logRoles } from '@testing-library/react';
import { OrderEntry } from '../../OrderEntry';
import { server } from '../../../../mocks/server';
import { http, HttpResponse } from 'msw';
import { expect } from 'vitest';

test('d', async () => {
    server.resetHandlers(
        http.get('http://localhost:3030/scoops', () => {
            return new HttpResponse(null, { status: 500 });
        }),
        http.get('http://localhost:3030/toppings', () => {
            return new HttpResponse(null, { status: 500 });
        })
    );
    const { container } = render(<OrderEntry />);
    const alerts = await screen.findAllByText('An unexpected error occured. Please try again later.');
    logRoles(container);
    expect(alerts).toHaveLength(2);
});
