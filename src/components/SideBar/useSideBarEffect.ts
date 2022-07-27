import { useEffect } from 'react';

interface UseSideBarEffectProps {
  device: string;
  onOpen: () => void;
  onClose: () => void;
}

export default function useSideBarEffect({
  device,
  onClose,
  onOpen,
}: UseSideBarEffectProps) {
  useEffect(() => {
    if (device !== 'PC') onClose();
    else if (device === 'PC') onOpen();
  }, [device]);
}
