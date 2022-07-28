import { useEffect } from 'react';

import { useMedia } from '@utils/index';

interface UseSideBarEffectProps {
  setSideBarOpen: (isOpen: boolean) => void;
}

export default function useSideBarEffect({
  setSideBarOpen,
}: UseSideBarEffectProps) {
  const device = useMedia();
  useEffect(() => {
    if (device !== 'PC') setSideBarOpen(false);
    else if (device === 'PC') setSideBarOpen(true);
  }, [device, setSideBarOpen]);
}
