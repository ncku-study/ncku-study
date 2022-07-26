import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useContext } from 'react';

import { NavSearchHandlerContext } from '@/components/GlobalLayout/NavSearchBarContext';
import { H1, H2, Header, StyledSearchBar } from './style';
import titleWording from './title.json';

const mapPathnameToTitle = (pathname: string) => {
    try {
        const prefix = pathname.split('/');
        if (prefix[1] === 'admin') {
            return titleWording.backstage[prefix[2] as never];
        }

        if (titleWording.normal[prefix[1] as never]) {
            return titleWording.normal[prefix[1] as never];
        }

        return '404 不存在的頁面';
    } catch (e) {
        return '404 不存在的頁面';
    }
};

interface TitleProps {
    isShowSearch: boolean;
}

const Title: FC<TitleProps> = ({ isShowSearch }) => {
    const router = useRouter();
    const { id } = router.query;
    const handleSearch = useContext(NavSearchHandlerContext);

    const TitleElement = id ? H2 : H1;
    return (
        <Header>
            <TitleElement>{mapPathnameToTitle(router.pathname)}</TitleElement>
            {isShowSearch && <StyledSearchBar onSubmit={handleSearch} />}
        </Header>
    );
};

export default Title;
