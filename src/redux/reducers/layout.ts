import { createReducer } from '@reduxjs/toolkit';

import { updateMode } from '@/redux/actions/layout';
import { Mode } from '~/pages/api/user';

interface LayoutState {
    mode: Mode;
}

const initState: LayoutState = {
    mode: Mode.normal,
};

const layoutReducer = createReducer(initState, (builder) =>
    builder.addCase(updateMode, (state, action) => {
        state.mode = action.payload;
    })
);

export default layoutReducer;
