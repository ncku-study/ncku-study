import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchStudyData } from '@/redux/middlewares/study';
import { studyDataSelector } from '@/redux/selectors/study';
import { useEffectOnce } from '@/utils/index';

function useFetchData(overscanStopIndex: number) {
    const studyData = useAppSelector(studyDataSelector);
    const dispatch = useAppDispatch();

    useEffectOnce(() => {
        if (!studyData.length || overscanStopIndex === studyData.length - 2) {
            dispatch(fetchStudyData());
        }
    }, [dispatch, overscanStopIndex, studyData.length]);
}

export default useFetchData;
