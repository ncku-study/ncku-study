import { NextRouter } from 'next/router';

export default function createRouterMock(
    router: Partial<NextRouter>
): NextRouter {
    return {
        basePath: '',
        pathname: '/',
        route: '/',
        query: {},
        asPath: '/',
        back: jest.fn(),
        push: jest.fn(),
        reload: jest.fn(),
        replace: jest.fn(),
        beforePopState: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn(),
        },
        isFallback: false,
        isLocaleDomain: false,
        isReady: true,
        defaultLocale: 'en',
        ...router,
    } as NextRouter;
}
