import GlobalLayout from '@/components/GlobalLayout';
import globalLayoutRender from '@/tests/utils/globalLayoutRender';
import routerMockProps from '@/tests/utils/routerMockProps';
import { Mode, userSession } from '@/tests/utils/userSession';

const pathnameMock = jest.fn().mockReturnValue('/');

jest.mock('next/router', () => ({
    useRouter: () => ({
        ...routerMockProps,
        pathname: pathnameMock(),
    }),
}));

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
            user: { ...userSession, isLoggedIn: false, mode: Mode.admin },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, admin, login page)', () => {
        pathnameMock.mockReturnValue('/admin/login');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            user: { ...userSession, isLoggedIn: true, mode: Mode.admin },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, admin, index page)', () => {
        pathnameMock.mockReturnValue('/admin');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            user: { ...userSession, isLoggedIn: true, mode: Mode.admin },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, normal)', () => {
        pathnameMock.mockReturnValue('/');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            user: { ...userSession, isLoggedIn: true, mode: Mode.normal },
        });
        expect(container).toMatchSnapshot();
    });
});
