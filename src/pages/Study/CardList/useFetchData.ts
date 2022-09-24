import { useEffect } from 'react';

import { useAppDispatch } from '~/src/redux/hooks';
import { fetchStudyInit } from '~/src/redux/middlewares/study';

function useFetchData(studyData: Array<unknown>, overscanStopIndex: number) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (overscanStopIndex > studyData.length - 2) {
            dispatch(fetchStudyInit());
        }
    }, [dispatch, overscanStopIndex, studyData.length]);
}

export default useFetchData;
