import { render } from '@testing-library/react';
import TypeIcon from '~/src/components/atom/TypeIcon';

describe('test for atom - TypeIcon', () => {
    const themes = ['轉系', '輔系', '雙主修'];
    it(`render with first specify theme must render correctly`, () => {
        const { container } = render(<TypeIcon theme={themes[0]} />);

        expect(container).toMatchSnapshot();
    });

    it(`render with second specify theme must render correctly`, () => {
        const { container } = render(<TypeIcon theme={themes[1]} />);

        expect(container).toMatchSnapshot();
    });

    it(`render with third specify theme must render correctly`, () => {
        const { container } = render(<TypeIcon theme={themes[2]} />);

        expect(container).toMatchSnapshot();
    });
});
