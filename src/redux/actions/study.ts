import { createAction } from '@reduxjs/toolkit';

import { Study as StudyModel } from '~/database/models';

export type Study = Partial<StudyModel>;

export const updateStudyData = createAction<Array<Study>>('UPDATE_STUDY_DATA');
