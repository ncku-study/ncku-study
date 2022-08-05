import GlobalLayout from '@/components/GlobalLayout';
import globalLayoutRender from '@/tests/utils/globalLayoutRender';
import routerMockProps from '@/tests/utils/routerMockProps';

const pathnameMock = jest.fn().mockReturnValue('/');

jest.mock('next/router', () => ({
    useRouter: () => ({
        ...routerMockProps,
        pathname: pathnameMock(),
    }),
}));

const userSession = {
    username: '',
    isLoggedIn: false,
    mode: 'normal',
};

describe('GlobalLayout', () => {
    it('renders default layout unchanged', () => {
        pathnameMock.mockReturnValue('/');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            user: { ...userSession, isLoggedIn: false },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged', () => {
        pathnameMock.mockReturnValue('/admin/login');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            user: { ...userSession, isLoggedIn: false, mode: 'admin' },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, admin, login page)', () => {
        pathnameMock.mockReturnValue('/admin/login');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            user: { ...userSession, isLoggedIn: true, mode: 'admin' },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, admin, index page)', () => {
        pathnameMock.mockReturnValue('/admin');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            user: { ...userSession, isLoggedIn: true, mode: 'admin' },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, normal)', () => {
        pathnameMock.mockReturnValue('/');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            user: { ...userSession, isLoggedIn: true, mode: 'normal' },
        });
        expect(container).toMatchSnapshot();
    });
});
