import { render } from '@testing-library/react';
import InputLabel from '~/src/components/atom/InputLabel';

describe('test for atom - InputLabel', () => {
    it('render InputLabel without props must be same', () => {
        const { container } = render(<InputLabel />);

        expect(container).toMatchSnapshot();
    });
});
