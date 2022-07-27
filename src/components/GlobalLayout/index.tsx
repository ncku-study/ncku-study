import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import SideBar from '@components/SideBar';
import { globalTheme } from '@styles/global';
import Banner from './Banner';
import { Container } from './style';

const switchOfSearchBar = ['/study'];

export default function GlobalLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const isShowSearch = switchOfSearchBar.includes(router.pathname) || true;

  return (
    <ThemeProvider theme={globalTheme}>
      <div style={{ display: 'flex' }}>
        <SideBar
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        />
        <Container isShowSearch={isShowSearch}>
          <Banner isShowSearch={isShowSearch} open={open} setOpen={setOpen} />
          {children}
        </Container>
      </div>
    </ThemeProvider>
  );
}
