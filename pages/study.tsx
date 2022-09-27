import { NextPage } from 'next';
import { Suspense } from 'react';

import LoadingFrame from '@/components/LoadingFrame';
import StudyPage from '@/pages/Study';

const Study: NextPage = () => {
    return (
        <Suspense fallback={LoadingFrame}>
            <StudyPage />
        </Suspense>
    );
};

export default Study;
