// import { useCallback, useState } from 'react';

// import { useAppSelector } from '@/redux/hooks';
// import { isShowedSelector, msgSelector } from '~/model/selector/announcement';
// import useSetAnnIsShowed from '~/utils/redux/useSetAnnIsShowed';
// import { CloseButton, YellowSnackbar } from './style';
// import useInitNotification from './useInitNotification';

// const Notification = () => {
//     const [uuid, setUUID] = useState(Date.now());
//     const isShowed = useSelector(isShowedSelector);
//     const msg = useAppSelector(msgSelector);

//     useInitNotification();
//     const setAnnIsShowed = useSetAnnIsShowed();

//     const handleClose = useCallback(
//         (event, reason) => {
//             if (reason === 'clickaway') {
//                 return;
//             }
//             setAnnIsShowed(false);
//         },
//         [setAnnIsShowed]
//     );

//     return (
//         <div>
//             {isShowed && (
//                 <YellowSnackbar
//                     anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//                     open={isShowed}
//                     onClose={handleClose}
//                     message={msg}
//                     key={uuid}
//                     action={
//                         <CloseButton theme="light" onClick={handleClose}>
//                             我知道了
//                         </CloseButton>
//                     }
//                 />
//             )}
//         </div>
//     );
// };

// export default Notification;
