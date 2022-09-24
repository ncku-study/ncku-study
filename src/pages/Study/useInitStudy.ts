import { useEffect, useRef } from 'react';
import useSWR from 'swr';

import { Study, updateStudyData } from '@/redux/actions/study';
import { useAppDispatch } from '@/redux/hooks';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useInitStudy() {
    const ref = useRef(false);
    const dispatch = useAppDispatch();
    const { data: studyDataInit } = useSWR<Array<Study>>(
        'http://localhost:3000/api/study?num=5',
        fetcher,
        {
            suspense: true,
        }
    );

    useEffect(() => {
        if (!ref.current && studyDataInit)
            dispatch(updateStudyData(studyDataInit));

        return () => {
            ref.current = true;
        };
    }, [dispatch, studyDataInit]);
}

export default useInitStudy;
