import { createReducer } from '@reduxjs/toolkit';
import { Study, updateStudyData } from '../actions/study';

interface StudyState {
    data: Array<Study>;
}

export const initState: StudyState = {
    data: [],
};

const studyReducer = createReducer(initState, (builder) =>
    builder.addCase(updateStudyData, (state, action) => {
        state.data = [...state.data, ...action.payload];
    })
);

export default studyReducer;
