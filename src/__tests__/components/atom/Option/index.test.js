import { render } from '@testing-library/react';
import Option from '~/src/components/atom/Option';

describe('test for atom - Option', () => {
    it('render Option must always be same', () => {
        const { container } = render(<Option />);

        expect(container).toMatchSnapshot();
    });
});
