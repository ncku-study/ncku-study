import useSWR from 'swr';

import { Study, updateStudyData } from '@/redux/actions/study';
import { useAppDispatch } from '@/redux/hooks';
import { useDidMount } from '@/utils/index';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useInitStudy() {
    const dispatch = useAppDispatch();
    const { data: studyDataInit } = useSWR<Array<Study>>(
        'http://localhost:3000/api/study?num=12',
        fetcher,
        {
            suspense: true,
        }
    );

    useDidMount(() => {
        if (studyDataInit) dispatch(updateStudyData(studyDataInit));
    });
}

export default useInitStudy;
