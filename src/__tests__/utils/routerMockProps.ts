const routerMockProps = {
    basePath: '',
    pathname: jest.fn(),
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
};

export default routerMockProps;
