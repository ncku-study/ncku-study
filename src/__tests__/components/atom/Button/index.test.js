import { render } from '@testing-library/react';
import Button from '~/src/components/atom/Button';

describe('test for atom - Button', () => {
    it('render Badge default theme must be same', () => {
        const { container } = render(<Button theme="primary" />);

        expect(container).toMatchSnapshot();
    });

    it('render Badge with specify props must be same', () => {
        const props = {
            height: '20px',
            weight: '100px',
            theme: 'light',
        };

        const { container } = render(<Button {...props} />);
        expect(container).toMatchSnapshot();
    });
});
