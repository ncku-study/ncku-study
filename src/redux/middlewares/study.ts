/* eslint-disable import/prefer-default-export */
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

import { updateStudyData } from '../actions/study';
import { RootState } from '../store';

export const fetchStudyData = (num?: number, from?: string) => {
    return (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
        const url = `/api/study${from ? `?from=${from}` : ''}${
            num ? `&num=${num}` : ''
        }`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                dispatch(updateStudyData(res as Array<unknown>));
            })
            .catch((e) => new Error(e));
    };
};
