import MenuIcon from '@mui/icons-material/Menu';

import { MenuIconStyle } from '../style';
import { Nav } from './style';
import Title from './Title';

interface BannerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  isShowSearch: boolean;
}

function Banner({ open, setOpen, isShowSearch }: BannerProps) {
  if (true) return <Title isShowSearch={isShowSearch} />;

  return (
    <Nav>
      <MenuIcon style={MenuIconStyle} onClick={() => setOpen(!open)} />
      <Title isShowSearch={isShowSearch} />
    </Nav>
  );
}

export default Banner;
