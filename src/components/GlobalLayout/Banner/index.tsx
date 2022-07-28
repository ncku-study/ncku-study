import MenuIcon from '@mui/icons-material/Menu';

import { useMedia } from '@utils/index';
import { MenuIconStyle, Nav } from './style';
import Title from './Title';

interface BannerProps {
  setSideBarOpen: (value: boolean) => void;
  isShowSearch: boolean;
}

function Banner({ setSideBarOpen, isShowSearch }: BannerProps) {
  const device = useMedia();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!device) return <></>;
  if (device === 'PC') return <Title isShowSearch={isShowSearch} />;

  return (
    <Nav>
      <MenuIcon style={MenuIconStyle} onClick={() => setSideBarOpen(true)} />
      <Title isShowSearch={isShowSearch} />
    </Nav>
  );
}

export default Banner;
