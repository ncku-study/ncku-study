import { useCallback } from 'react';

import { Study } from '@/redux/actions/study';
import { useModalState } from '@/utils/index';
import changeHeaderInfo from '@/utils/seo/header';
import trans from '@/utils/transition';
import wording from '~/src/wording/general.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function useOpenContent(itemData: Study, index: number) {
    const [, setIsModalOpen] = useModalState();
    // const [, setModalContext] = useModalContext();

    const handleOpenContent = useCallback(() => {
        // setModalContext(transIntoModalData('study', itemData, index));

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
    }, [itemData, setIsModalOpen]);

    return handleOpenContent;
}

export default useOpenContent;
