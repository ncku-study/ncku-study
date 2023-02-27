import { createAction } from '@reduxjs/toolkit';

type Category = {
    id: string;
    name: string;
};

type Statistic = {
    id: string;
    name: string;
    type: string;
};

export type Study = {
    id: string;
    title: string;
    major: string;
    year: number;
    content: string;
    confirm: number;
    timestamp: string;
    categories: Array<Category>;
    statistics: Array<Statistic>;
};

export const updateStudyData = createAction<Array<Study>>('UPDATE_STUDY_DATA');
