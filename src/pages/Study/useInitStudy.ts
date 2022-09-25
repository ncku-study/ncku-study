import useSWR from 'swr';

import { Study, updateStudyData } from '@/redux/actions/study';
import { useAppDispatch } from '@/redux/hooks';
import { useEffectOnce } from '~/src/utils';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useInitStudy() {
    const dispatch = useAppDispatch();
    const { data: studyDataInit } = useSWR<Array<Study>>(
        'http://localhost:3000/api/study?num=5',
        fetcher,
        {
            suspense: true,
        }
    );

    useEffectOnce(() => {
        if (studyDataInit) dispatch(updateStudyData(studyDataInit));
    });
}

export default useInitStudy;
