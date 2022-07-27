import { useRouter } from 'next/router';
import { H1, Header } from './style';
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

function Title({ isShowSearch }: TitleProps) {
  const router = useRouter();
  //   const { id } = useParams();
  //   const handleSearch = useContext(NavSearchContext);

  const TitleElement = H1;
  return (
    <Header>
      <TitleElement>{mapPathnameToTitle(router.pathname)}</TitleElement>
      {/* <Search isShow={isShowSearch} onSubmit={handleSearch} /> */}
    </Header>
  );
}

export default Title;
