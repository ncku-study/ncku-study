import { useCallback } from 'react';

import { Study } from '@/redux/actions/study';
import { useModalState } from '@/utils/index';
import transIntoModalData from '@/utils/redux/components/modal/transIntoModalData';
import useModalContext from '@/utils/redux/components/modal/useModalContext';
import changeHeaderInfo from '@/utils/seo/header';
import trans from '@/utils/transition';
import wording from '~/src/wording/general.json';

function useOpenContent(itemData: Study, index: number) {
    const [, setIsModalOpen] = useModalState();
    const [, setModalContext] = useModalContext();

    const handleOpenContent = useCallback(() => {
        setModalContext(transIntoModalData('study', index, itemData));

        const strMap = {
            schoolName: wording.schoolName,
            title: itemData.title,
            websiteTitleShort: wording.websiteTitleShort,
        };

        changeHeaderInfo(
            trans(wording.header.studyTitle, strMap),
            itemData.content
        );

        // history.push(`?id=${itemData.id}`);
        setIsModalOpen(true);
    }, [index, itemData, setIsModalOpen, setModalContext]);

    return handleOpenContent;
}

export default useOpenContent;
