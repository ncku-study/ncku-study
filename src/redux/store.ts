import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import layoutReducer from './reducers/layout';
import modalReducer from './reducers/modal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const genStore = (preloadedState: any) => {
    return configureStore({
        preloadedState,
        reducer: {
            layout: layoutReducer,
            modal: modalReducer,
        },
        middleware: [thunk],
    });
};

export type RootState = ReturnType<ReturnType<typeof genStore>['getState']>;

export type AppDispatch = ReturnType<typeof genStore>['dispatch'];
