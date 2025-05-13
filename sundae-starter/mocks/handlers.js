import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('http://localhost:3030/scoops', () => {
        // Note that you DON'T have to stringify the JSON!
        return HttpResponse.json([
            { name: 'chocolate', imagePath: '/images/chocolate.png' },
            { name: 'vanilla', imagePath: '/images/vanilla.png' },
        ]);
    }),
    http.get('http://localhost:3030/toppings', () => {
        // Note that you DON'T have to stringify the JSON!
        return HttpResponse.json([
            { name: 'cherris', imagePath: '/images/cherris.png' },
            { name: 'm&ms', imagePath: '/images/m-and-ms.png' },
            { name: 'm&hot fudge', imagePath: '/images/m-hot-fudge.png' },
        ]);
    }),
];
