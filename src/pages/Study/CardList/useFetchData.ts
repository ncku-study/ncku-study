import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchStudyData } from '@/redux/middlewares/study';
import { studyDataSelector } from '@/redux/selectors/study';

function useFetchData(overscanStopIndex: number) {
    const studyData = useAppSelector(studyDataSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (overscanStopIndex === studyData.length - 2) {
            dispatch(fetchStudyData(3, studyData[studyData.length - 1].id));
        }
    }, [dispatch, overscanStopIndex, studyData, studyData.length]);
}

export default useFetchData;
