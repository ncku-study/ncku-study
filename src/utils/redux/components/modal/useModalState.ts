import { useCallback } from 'react';

import { closeModal, openModal } from '@/redux/actions/modal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { modalStatusSelector } from '@/redux/selectors/modal';

function useModalState(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector(modalStatusSelector);

    const setModalOpen = useCallback(
        (open: boolean) => {
            dispatch(open ? openModal() : closeModal());
        },
        [dispatch]
    );

    return [isModalOpen, setModalOpen];
}

export default useModalState;
