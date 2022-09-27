import type { FC } from 'react';

import ReaderModal from '@/components/modals/ReaderModal';
import StudyReader from '@/components/readers/StudyReader';
import { useAppSelector } from '@/redux/hooks';
import { loginStatusSelector } from '@/redux/selectors/layout';
import CardList from './CardList';
import { Container } from './style';
import useInitStudy from './useInitStudy';

const Study: FC = () => {
    const isAdmin = useAppSelector(loginStatusSelector);

    useInitStudy();

    return (
        <>
            <Container>
                <div />
                <CardList />
                <div />
            </Container>
            <ReaderModal
                isAdmin={isAdmin}
                onClose={() => undefined}
                readerComponent={StudyReader}
            />
        </>
    );
};

export default Study;
