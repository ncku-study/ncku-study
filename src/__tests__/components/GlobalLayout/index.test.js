import { fireEvent, screen } from '@testing-library/react';

import GlobalLayout from '@/components/GlobalLayout';
import { initState as initLayoutState } from '@/redux/reducers/layout';
import customRender from '@/tests/utils/customRender';
import routerMockProps from '@/tests/utils/routerMockProps';
import { Mode } from '@/tests/utils/userSession';
import * as useMediaHook from '@/utils/useMedia';

const pushedRoute = jest.fn();
const pathnameMock = jest.fn().mockReturnValue('/');

jest.mock('next/router', () => ({
    useRouter: () => ({
        ...routerMockProps,
        pathname: pathnameMock(),
        push: pushedRoute,
    }),
}));

describe('GlobalLayout', () => {
    it('renders default layout and redirect after clicking', () => {
        pathnameMock.mockReturnValue('/');
        customRender(<GlobalLayout />, {
            layout: initLayoutState,
        });

        fireEvent.click(screen.getByRole('button', { name: '我要分享' }));
        expect(pushedRoute.mock.calls[0][0]).toEqual('/post');

        fireEvent.click(screen.getByRole('button', { name: '學業心得' }));
        expect(pushedRoute.mock.calls[1][0]).toEqual('/study');

        fireEvent.click(screen.getByRole('button', { name: '轉輔雙主' }));
        expect(pushedRoute.mock.calls[2][0]).toEqual('/');
    });

    it('renders admin layout before signed in', () => {
        pathnameMock.mockReturnValue('/admin/login');
        customRender(<GlobalLayout />, {
            layout: {
                ...initLayoutState,
                user: { ...initLayoutState.user, mode: Mode.admin },
            },
        });

        expect(
            screen.getByRole('button', { name: '回到首頁' })
        ).toBeInTheDocument();
    });

    it('renders admin layout after signed in (user mode)', () => {
        pathnameMock.mockReturnValue('/');
        customRender(<GlobalLayout />, {
            layout: {
                ...initLayoutState,
                user: { ...initLayoutState.user, isLoggedIn: true },
            },
        });

        expect(
            screen.getByRole('button', { name: '登出' })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: '進入後台' })
        ).toBeInTheDocument();
    });

    it('renders admin layout after signed in (admin mode)', () => {
        pathnameMock.mockReturnValue('/admin');
        customRender(<GlobalLayout />, {
            layout: {
                ...initLayoutState,
                user: {
                    ...initLayoutState.user,
                    isLoggedIn: true,
                    mode: Mode.admin,
                },
            },
        });

        expect(
            screen.getByRole('button', { name: '登出' })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: '回到首頁' })
        ).toBeInTheDocument();
    });
});

describe('Sidebar', () => {
    it('renders sidebar open on PC', () => {
        pathnameMock.mockReturnValue('/');
        customRender(<GlobalLayout />, {
            layout: {
                ...initLayoutState,
                isSidebarOpen: true,
            },
        });

        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders sidebar closed on mobile', () => {
        pathnameMock.mockReturnValue('/');
        jest.spyOn(useMediaHook, 'default').mockReturnValue('mobile');
        customRender(<GlobalLayout />, {
            layout: initLayoutState,
        });

        expect(
            screen.queryByRole('button', { name: '聯絡我們' })
        ).not.toBeInTheDocument();
    });

    it('update sidebar status when resizing', () => {
        pathnameMock.mockReturnValue('/');
        customRender(<GlobalLayout />, {
            layout: initLayoutState,
        });

        global.innerWidth = 400;
        global.dispatchEvent(new Event('resize'));

        expect(
            screen.queryByRole('button', { name: '聯絡我們' })
        ).not.toBeInTheDocument();
    });
});
