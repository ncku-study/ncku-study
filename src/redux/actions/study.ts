import { createAction } from '@reduxjs/toolkit';

export const updateStudyData =
    createAction<Array<unknown>>('UPDATE_STUDY_DATA');
export const updateLoginStatus = createAction<boolean>('UPDATE_LOGINSTATUS');
