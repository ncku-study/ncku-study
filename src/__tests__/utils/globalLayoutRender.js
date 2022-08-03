import { render } from '@testing-library/react';

import { GlobalLayoutContextProvider } from '~/src/contexts/GlobalLayoutContext';

const globalLayoutRender = (ui, providerProps, renderOptions) => {
    return render(
        <GlobalLayoutContextProvider {...providerProps}>
            {ui}
        </GlobalLayoutContextProvider>,
        renderOptions
    );
};

export default globalLayoutRender;
