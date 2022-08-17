import { configureStore } from '@reduxjs/toolkit';

import layoutReducer from './reducers/layout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const genStore = (preloadedState: any) => {
    return configureStore({
        preloadedState,
        reducer: {
            layout: layoutReducer,
        },
    });
};

export type RootState = ReturnType<ReturnType<typeof genStore>['getState']>;

export type AppDispatch = ReturnType<typeof genStore>['dispatch'];
