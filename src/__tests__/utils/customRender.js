import { genStore } from '@/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

const customRender = (ui, providerProps, renderOptions) => {
    const store = genStore(providerProps);

    return render(<Provider store={store}>{ui}</Provider>, renderOptions);
};

export default customRender;
