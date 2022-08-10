import GlobalLayout from '@/components/GlobalLayout';
import { initState as initLayoutState } from '@/redux/reducers/layout';
import customRender from '@/tests/utils/customRender';
import routerMockProps from '@/tests/utils/routerMockProps';
import { Mode } from '@/tests/utils/userSession';
import * as useMediaHook from '@/utils/useMedia';

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
        const { container } = customRender(<GlobalLayout />, {
            layout: initLayoutState,
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged', () => {
        pathnameMock.mockReturnValue('/admin/login');
        const { container } = customRender(<GlobalLayout />, {
            layout: { user: { ...initLayoutState.user, mode: Mode.admin } },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, admin, login page)', () => {
        pathnameMock.mockReturnValue('/admin/login');
        const { container } = customRender(<GlobalLayout />, {
            layout: {
                ...initLayoutState,
                user: {
                    ...initLayoutState.user,
                    isLoggedIn: true,
                    mode: Mode.admin,
                },
            },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, admin, index page)', () => {
        pathnameMock.mockReturnValue('/admin');
        const { container } = customRender(<GlobalLayout />, {
            layout: {
                ...initLayoutState,
                user: {
                    ...initLayoutState.user,
                    isLoggedIn: true,
                    mode: Mode.admin,
                },
            },
        });
        expect(container).toMatchSnapshot();
    });

    it('renders layout unchanged (signed in, normal)', () => {
        pathnameMock.mockReturnValue('/');
        const { container } = customRender(<GlobalLayout />, {
            layout: {
                ...initLayoutState,
                user: {
                    ...initLayoutState.user,
                    isLoggedIn: true,
                },
            },
        });
        expect(container).toMatchSnapshot();
    });
});

describe('Sidebar', () => {
    it('renders sidebar unchanged (PC)', () => {
        pathnameMock.mockReturnValue('/');
        const { container } = customRender(<GlobalLayout />, {
            layout: initLayoutState,
        });
        expect(container).toMatchSnapshot();
    });
    it('renders sidebar unchanged (mobile)', () => {
        pathnameMock.mockReturnValue('/');
        jest.spyOn(useMediaHook, 'default').mockReturnValue('mobile');
        const { container } = customRender(<GlobalLayout />, {
            layout: initLayoutState,
        });
        expect(container).toMatchSnapshot();
    });
});
