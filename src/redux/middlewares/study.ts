import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { Mode } from '~/lib/session';
import { updateMode } from '../actions/layout';
import { RootState } from '../store';

/* eslint-disable import/prefer-default-export */
export const fetchStudyInit = () => {
    return (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
        fetch('/api/study')
            .then((res) => res.json())
            .then(() => dispatch(updateMode(Mode.admin)))
            .catch((e) => new Error(e));
    };
};
