/* eslint-disable @typescript-eslint/no-restricted-imports */
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => ThunkDispatch<RootState, unknown, Action> =
    useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
