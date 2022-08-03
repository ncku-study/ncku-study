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

describe('GlobalLayout', () => {
    it('renders default layout unchanged', () => {
        pathnameMock.mockReturnValue('/');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            isLoggedIn: false,
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged', () => {
        pathnameMock.mockReturnValue('/admin/login');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            isLoggedIn: false,
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in)', () => {
        pathnameMock.mockReturnValue('/admin/login');
        const { container } = globalLayoutRender(<GlobalLayout />, {
            isLoggedIn: true,
        });
        expect(container).toMatchSnapshot();
    });
});
