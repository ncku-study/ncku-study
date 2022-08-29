import type { FC } from 'react';

import LoadingFrame from '@/components/LoadingFrame';
import ReaderModal from '@/components/modals/ReaderModal';
import StudyReader from '@/components/readers/StudyReader';
import { useAppSelector } from '@/redux/hooks';
import { loginStatusSelector } from '@/redux/selectors/layout';
import CardList from './CardList';
import { Container } from './style';

const Study: FC = () => {
    const isAdmin = useAppSelector(loginStatusSelector);

    return (
        <LoadingFrame isFinishRequest>
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
        </LoadingFrame>
    );
};

export default Study;
