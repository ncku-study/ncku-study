import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useState } from 'react';

import { globalTheme } from '~/styles/global';
import Banner from './Banner';
import { NavSearchProvider } from './NavSearchProvider';
import SideBar from './SideBar';
import { Container } from './style';
import useSideBarEffect from './useSideBarEffect';

const switchOfSearchBar = ['/study'];

const GlobalLayout: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    useSideBarEffect({ setSideBarOpen });

    const isShowSearch = switchOfSearchBar.includes(router.pathname);

    return (
        <ThemeProvider theme={globalTheme}>
            <SideBar
                open={isSideBarOpen}
                onClose={() => setSideBarOpen(false)}
            />
            <NavSearchProvider>
                <Container isShowSearch={isShowSearch}>
                    <Banner
                        isShowSearch={isShowSearch}
                        setSideBarOpen={setSideBarOpen}
                    />
                    {children}
                </Container>
            </NavSearchProvider>
        </ThemeProvider>
    );
};

export default GlobalLayout;
