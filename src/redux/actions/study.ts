import { createAction } from '@reduxjs/toolkit';

export type Category = {
    id: string;
    name: string;
};

export type Statistic = {
    id: string;
    name: string;
    type: string;
    value: string;
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
