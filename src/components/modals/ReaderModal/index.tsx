import { ComponentType, FC, useCallback } from 'react';
import Modal from 'react-modal';

import { clearModalContext } from '@/redux/actions/modal';
import { useAppDispatch } from '@/redux/hooks';
import { useModalState } from '@/utils/index';
import { ModalStyle } from './style';

interface ReaderModalProps {
    isAdmin: boolean;
    onClose?: () => void;
    readerComponent: ComponentType<{ isAdmin: boolean }>;
}

const ReaderModal: FC<ReaderModalProps> = ({
    isAdmin,
    onClose,
    readerComponent: ReaderComponent,
}) => {
    const [isModalOpen, setModalOpen] = useModalState();
    const dispatch = useAppDispatch();

    const handleRequestClose = useCallback(() => {
        setModalOpen(false);
        onClose?.();
    }, [onClose, setModalOpen]);

    const handleAfterClose = useCallback(() => {
        dispatch(clearModalContext);
    }, [dispatch]);

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Minimal Modal Example"
            style={ModalStyle}
            onRequestClose={handleRequestClose}
            onAfterClose={handleAfterClose}
        >
            {ReaderComponent && <ReaderComponent isAdmin={isAdmin} />}
        </Modal>
    );
};

Modal.setAppElement('body');
export default ReaderModal;
