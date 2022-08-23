import { fireEvent, render, screen } from '@testing-library/react';
import ClickListener from '~/src/components/atom/ClickListener';

describe('test for atom - ClickListener', () => {
    it('render Badge without props must be same', () => {
        const { container } = render(
            <ClickListener>
                <div>test</div>
            </ClickListener>
        );

        expect(container).toMatchSnapshot();
    });

    it('render Badge with event must be work correctly and must be same with non-props', () => {
        const mockClick = jest.fn();

        const { container } = render(
            <ClickListener onClick={mockClick}>
                <div>test</div>
            </ClickListener>
        );

        mockClick.mockClear();
        fireEvent.click(screen.getByRole('button'));
        expect(mockClick).toBeCalledTimes(1);
        expect(container).toMatchSnapshot();
    });
});
