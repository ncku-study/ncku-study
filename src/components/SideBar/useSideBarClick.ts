import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface UseSideBarClickInterface {
  device: string;
  onClose: () => void;
}

export default function useSideBarClick({
  device,
  onClose,
}: UseSideBarClickInterface) {
  const router = useRouter();

  const handleClick = useCallback(
    (url: string) => {
      // // 問卷
      // if (url[0] !== '/') {
      //   window.open(url, '_blank').focus();
      //   return;
      // }

      router.push(url);
      if (device !== 'PC') onClose();
    },
    [router, device, onClose]
  );

  // const handleToggle = useCallback(
  //   () => (event: KeyboardEvent) => {
  //     if (
  //       event.type === 'keydown' &&
  //       (event.key === 'Tab' || event.key === 'Shift')
  //     ) {
  //       return;
  //     }

  //     onClose();
  //   },
  //   [onClose]
  // );

  return { handleClick /* , handleToggle  */ };
}
